import { sql } from "@vercel/postgres";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
        console.log(credentials);

        const userFound = await sql`
        SELECT * 
        FROM users 
        WHERE email = ${credentials.email}`;

        if (!userFound.rows[0]) throw new Error("No user found");

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.rows[0].password
        );

        if (!matchPassword) throw new Error("Wrong password");

        return {
          id: userFound.rows[0].id,
          name: userFound.rows[0].username,
          email: userFound.rows[0].email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
