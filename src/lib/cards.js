import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// #region Functions (1)

export async function getCards(user_id) {
  try {
    const data = await sql`
    SELECT * 
    FROM cards
    WHERE user_id = ${user_id}`;
    return data.rows;
  } catch (error) {
    return NextResponse.json(error);
  }
}

// #endregion Functions (1)
