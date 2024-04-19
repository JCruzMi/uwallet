import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

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
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await sql`INSERT
    INTO users (username, email, password)
    VALUES (${data.username}, ${data.email}, ${hashedPassword})
    RETURNING *`;

    const { password: _, ...user } = newUser.rows[0];

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

// #endregion Functions (1)

// #region Variables (1)

const bcrypt = require("bcrypt");

// #endregion Variables (1)
