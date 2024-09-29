"use server"
import { PrismaClient } from "@prisma/client";  
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";   

export async function createProject(formData: FormData) {
    console.log(formData)
}


