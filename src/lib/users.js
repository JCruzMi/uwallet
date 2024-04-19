import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// #region Functions (1)

export async function GetUsers() {
  try {
    const data = await sql`
    SELECT * 
    FROM users`;
    return data.rows;
  } catch (error) {
    return NextResponse.json(error);
  }
}

// #endregion Functions (1)
