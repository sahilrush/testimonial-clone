import GoogleProvider from "next-auth/providers/google";
import db from "@/app/db";


export const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
      ],
      callbacks: {
        async signIn({ user, account }:any) {
          if (account?.provider === "google") {
            const email = user.email;
    
            if (!email) {
              return false;
            }
    
            const userDb = await db.user.findFirst({
              where: {
                username: email,
              },
            });
    
            if (!userDb) {
              await db.user.create({
                data: {
                  username: email,
                  provider: "Google",
                },
              });
            }
          }
    
          return true;
        },
      },
    
}