import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { createCardWithId } from "@/lib/cards";

// #region Functions (1)

export async function POST(request) {
  try {
    const data = await request.json();

    let userFound = await sql`
    SELECT * 
    FROM users
    WHERE email = ${data.email}`;

    userFound = userFound.rows[0];

    if (userFound) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await sql`INSERT
    INTO users (username, email, password)
    VALUES (${data.username}, ${data.email}, ${hashedPassword})
    RETURNING *`;

    const { password: _, ...user } = newUser.rows[0];

    await createCardWithId("Main", newUser.rows[0].id);

    return NextResponse.json(user);
  } catch (error) {
    return toast({
      title: "Error",
      description: error.message,
      variant: "error",
    });
  }
}

// #endregion Functions (1)

// #region Variables (1)

const bcrypt = require("bcrypt");

// #endregion Variables (1)
