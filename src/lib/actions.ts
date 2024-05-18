"use server";

import { AuthError } from "next-auth";
import { SignInOptions } from "next-auth/react";

import { sql } from "@vercel/postgres";

import { auth, signIn } from "../../auth";
import { Card, User } from "./definitions";

export async function authenticate(formData: SignInOptions) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function getCards(): Promise<Card[] | undefined | void> {
  const session = await auth();
  if (session?.user) {
    try {
      const data = await sql`
      SELECT * 
      FROM cards
      WHERE user_id = ${session?.user.id} AND status`;
      return data.rows as Card[];
    } catch (error) {
      return [];
    }
  }
}
