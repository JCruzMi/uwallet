"use server";

import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { auth } from "../../auth";
import { generateCreditCard } from "./utils";

export async function createCard(name) {
  const session = await auth();
  try {
    if (session?.user) {
      const id = generateCreditCard();
      const userId = parseInt(session.user.id);
      const amount = 0;

      const data = await sql`INSERT INTO
         cards (name, id, user_id, amount) VALUES 
         (${name}, ${id}, ${userId}, ${amount})`;
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function deleteCard(number_card) {
  try {
    await sql`delete from cards where id = ${number_card}`;
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

export async function sendMoney(number_sender, number_receiver, amount) {
  try {
    await sql`update cards set amount = amount - ${amount} where number = ${number_sender}`;
    await sql`update cards set amount = amount + ${amount} where number = ${number_receiver}`;
    await sql`insert into movements (number_sender, number_receiver, amount) values (${number_sender}, ${number_receiver}, ${amount})`;
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function depositMoney(number_receiver, amount) {
  try {
    const number_sender = "0000000000000000";
    await sql`update cards set amount = amount + ${amount} where id = ${number_receiver}`;
    await sql`insert into movements (number_sender, number_receiver, amount) values (${number_sender}, ${number_receiver}, ${amount})`;
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function withdrawMoney(number_sender, amount) {
  try {
    const number_receiver = "0000000000000001";
    await sql`update cards set amount = amount - ${amount} where id = ${number_sender}`;
    await sql`insert into movements (number_sender, number_receiver, amount) values (${number_sender}, ${number_receiver}, ${amount})`;
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function updateCard(id, name) {
  try {
    await sql`update cards set name = ${name} where id = ${id}`;
  } catch (error) {
    return NextResponse.json(error);
  }
}
