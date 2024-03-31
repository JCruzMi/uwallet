import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { authConfig } from './auth.config';

// #region Functions (1)

async function getUser(email: string): Promise<any | undefined> {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    throw new Error('Failed to fetch user.');
  }
}

// #endregion Functions (1)

// #region Variables (1)

export const { auth, signIn, signOut } = NextAuth({
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

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});

// #endregion Variables (1)