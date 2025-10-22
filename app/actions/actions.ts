"use server";

import { PrismaClient } from "@/lib/generated/prisma";
import { RegisterFormData } from "../types/types";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "@/lib/auth-helper";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { AuthError } from "next-auth";

const prisma = new PrismaClient();

export async function register(RegisterData: RegisterFormData) {
  try {
    // check if user existt
    const existingUser = await prisma.user.findUnique({
      where: { email: RegisterData.email },
    });

    if (existingUser) {
      return { success: false, message: "user already exists" };
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(RegisterData.password, 10);

    const user = await prisma.user.create({
      data: {
        fullName: RegisterData.first_name + RegisterData.last_name,
        email: RegisterData.email,
        password: hashedPassword, // Make sure to hash the password!
        role: 'CLIENT', // or "ADMIN"
      },
    });
    console.log("User created:", user.createdAt);

    return {success:true , message:"user created "};

} catch (error) {
    console.log("something went wrong")
    console.log("error", error.message);
}
redirect("/login?registered=true");
}




// ========== LOGIN ACTION ==========
export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log("Login attempt for:", email);

  // Validation
  if (!email || !password) {
    return { success: false, error: "Email and password are required" };
  }

  try {
    // Attempt to sign in with NextAuth
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log("SignIn result:", result);

    // If sign in failed
    if (result?.error) {
      return { success: false, error: "Invalid email or password" };
    }

    // Get user role to determine redirect
    const user = await prisma.user.findUnique({
      where: { email },
      select: { role: true },
    });

    await prisma.$disconnect();

    // Redirect based on role
    if (user?.role === "FREELANCER" ) {
      redirect("/admin/dashboard");
    } else {
      redirect("/client/dashboard");
    }
  } catch (error: any) {
    // Don't catch redirect errors
    if (isRedirectError(error)) {
      throw error;
    }

    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: false, error: "Invalid email or password" };
        case "CallbackRouteError":
          return { success: false, error: "Invalid email or password" };
        default:
          return { success: false, error: "Something went wrong" };
      }
    }

    console.error("Login error:", error);
    return { success: false, error: "Something went wrong" };
  } finally {
    await prisma.$disconnect();
  }
}

// ========== LOGOUT ACTION ==========
export async function logout() {
  console.log("yoo")
  await signOut({ redirect: false });
  redirect("/login");
}




// GET TOTAL PROJECTS FOR A FREELANCER
export async function getFreelancerProjectsAndClients() {
  const session=await auth()
  const freelancerId=Number(session?.user.id) 

  console.log("session",session)

  // GET ALL FREELANCER PROJECTS

  const projects=await prisma.project.findMany({
    where:{freelancerId:freelancerId}
  })

  // COUNT THE NUMBER OF ACTIVE PROJECTS
  const freelancerActiveProjects=projects.filter(project => project.status==="IN_PROGRESS") ;
  const FreealancerTotalClient=[
  ...new Map(projects.map(project => [project.clientId, project])).values()
].length ;

console.log("freelancer total client",FreealancerTotalClient)

  console.log("projects",projects)

  return {freelancerActiveProjects , FreealancerTotalClient}
    
}