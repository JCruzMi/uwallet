import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { User } from '@/lib/definitions';
import { sql } from '@vercel/postgres';
import { authConfig } from './auth.config';

// #region Functions (1)

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
}

// #endregion Functions (1)

// #region Variables (1)

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUser(email);
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ account, token, user, profile, session }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
});

// #endregion Variables (1)
