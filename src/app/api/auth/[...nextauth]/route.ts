import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import db from "@/app/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
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

        // If user doesn't exist in the database, create a new user
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
});

export { handler as GET, handler as POST };
