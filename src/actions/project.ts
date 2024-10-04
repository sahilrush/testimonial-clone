import prisma from "@/app/db";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";




type Project = {
    title: string;
    url: string;
    description: string;    
}

export async function createProject({ title, url, description }: Project) {
    const session = await getServerSession(authOptions);

    console.log("Session:", JSON.stringify(session));

    if (!session || !session.user) {
        console.error("Session or user not found:", session);
        throw new Error("You must be logged in to create a project.");
    }

    const userId = session.user.id;

    if (!userId) {
        throw new Error("User ID is not available in the session.");
    }

    const projects = await prisma.projects.create({
        data: {
            title: title,
            projectUrl: url,
            projectDescription: description,
            userId: userId,
        },
    });

    return projects;
}


// should i do form data and take input from the form and then pass it to the createProject function huh??