"use server";

import { PrismaClient } from "@/lib/generated/prisma";
import { RegisterFormData } from "../types/types";
import bcrypt from "bcryptjs";

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
        role: RegisterData.role, // or "ADMIN"
      },
    });

    console.log("User created:", user);
  } catch (e) {
    console.log("error", e);
  }
  console.log("register data", RegisterData);
}
