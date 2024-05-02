"use server";

import { sql } from "@vercel/postgres";
import { auth } from "../../auth";
import { generateCreditCard } from "./utils";

export async function createCard(name) {
  const session = await auth();
  try {
    if (session?.user) {
      const id = parseInt(generateCreditCard());
      const card = generateCreditCard();
      const userId = parseInt(session.user.id);
      const amount = 0;
      const created_at = new Date();
      const data = await sql`INSERT INTO
         cards (id ,name, number, user_id, amount, created_at) VALUES 
         (${id}, ${name}, ${card}, ${userId}, ${amount}, ${created_at})`;
      return res.status(200).json({ data: data });
    }
  } catch (error) {
    return res.status(400).json({ data: error });
  }
}

export async function deleteCard(number_card) {
  try {
    await sql`delete from cards where number = ${number_card}`;
  } catch (error) {
    return res.status(400).json({ data: error });
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
    return res.status(400).json({ data: error });
  }
}

export async function sendMoney(number_sender, number_receiver, amount) {
  try {
    await sql`update cards set amount = amount - ${amount} where number = ${number_sender}`;
    await sql`update cards set amount = amount + ${amount} where number = ${number_receiver}`;
  } catch (error) {
    return res.status(400).json({ data: error });
  }
}

export async function depositMoney(number, amount) {
  try {
    await sql`update cards set amount = amount + ${amount} where number = ${number}`;
  } catch (error) {
    return res.status(400).json({ data: error });
  }
}

export async function withdrawMoney(number, amount) {
  try {
    await sql`update cards set amount = amount - ${amount} where number = ${number}`;
  } catch (error) {
    return res.status(400).json({ data: error });
  }
}

export async function updateCard(id, name) {
  try {
    `update cards set name = ${name} where id = ${id}`;
  } catch (error) {
    return res.status(400).json({ data: error });
  }
}
