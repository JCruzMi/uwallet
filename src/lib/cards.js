"use server";

import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { auth } from "../../auth";

export async function createCard(name, number) {
  const session = await auth();
  const uid = uuidv4().toString();
  if (session?.user) {
    const userId = session.user.id.toString();
    const amount = 0;
    try {
      const data =
        await sql`insert into cards (id ,name, number, user_id, amount) values (${uid} ${name}, ${number}, ${userId}, ${amount})`;
      console.log(data);
    } catch (error) {
      return NextResponse.json(error);
    }
  }
}

export async function deleteCard(id) {
  try {
    `delete from cards where id = ${id}`;
  } catch (error) {
    return NextResponse.json(error);
  }
}

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

export async function sendMoney(id_receiver, id_sender, amount) {
  try {
    `update cards set amount = amount + ${amount} where id = ${id_receiver}`;
    `update cards set amount = amount - ${amount} where id = ${id_sender}`;
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function updateCard(id, name, number) {
  try {
    `update cards set name = ${name}, number = ${number} where id = ${id}`;
  } catch (error) {
    return NextResponse.json(error);
  }
}
