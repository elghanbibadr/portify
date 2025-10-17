"use server" ;

import { PrismaClient } from "@/lib/generated/prisma";
import { RegisterFormData } from "../types/types";

const prisma = new PrismaClient();

async function register(RegisterData:RegisterFormData){

 
  try{
      const user = await prisma.user.create({
      data: {
        fullName: RegisterData.first_name + RegisterData.last_name,
        email:RegisterData.email,
        password: "hashed_password_here", // Make sure to hash the password!
        role: RegisterData.role, // or "ADMIN"
      },
    });
    
    console.log("User created:", user);


  }catch(e){
    console.log("error",e)
  }
    console.log("register data",RegisterData);
}