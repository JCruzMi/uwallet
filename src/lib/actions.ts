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

export async function cards(): Promise<Card[] | undefined | void> {
  let userCards = await getUserId().then((userId) => {
    if (userId?.id) {
      return getCards(userId.id);
    }
    return [];
  });

  return userCards;
}

export async function getCards(
  user_id: string
): Promise<Card[] | undefined | void> {
  try {
    const data = await sql`
    SELECT * 
    FROM cards
    WHERE user_id = ${user_id}`;
    return data.rows as Card[];
  } catch (error) {
    return console.log(error);
  }
}

async function getUserId(): Promise<User | undefined> {
  try {
    const session = await auth();
    const user =
      await sql<User>`SELECT id FROM users WHERE email=${session?.user?.email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
