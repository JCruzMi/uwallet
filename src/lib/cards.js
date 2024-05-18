"use server";

import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { auth } from "../../auth";
import { generateCreditCard } from "./utils";
import { createMovement } from "./movements";

/**
 * Create a credit card for a user.
 *
 * @param {string} name - The name of the card.
 * @return {Promise} A promise that resolves when the card is created, or rejects with an error.
 */
export async function createCard(name) {
  // Authenticate the user
  const session = await auth();

  try {
    // If the user is authenticated
    if (session?.user) {
      // Generate a card ID
      const id = generateCreditCard();

      // Get the user ID from the session
      const userId = parseInt(session.user.id);

      // The initial amount is 0
      const amount = 0;

      // Insert the card into the database
      await sql`
        INSERT INTO
          cards (name, id, user_id, amount)
        VALUES
          (${name}, ${id}, ${userId}, ${amount})
      `;
    }
  } catch (error) {
    // If an error occurs, return the error as a JSON response
    return NextResponse.json(error);
  }
}

/**
 * Delete a credit card from the database.
 *
 * @param {string} cardNumber - The card number to delete.
 * @return {Promise} A promise that resolves when the card is deleted, or rejects with an error.
 */
export async function deleteCard(cardNumber) {
  const session = await auth();
  const userId = session?.user?.id;

  if (userId) {
    await sql`
      UPDATE cards
      set status = false
      WHERE
        id = ${cardNumber} AND
        user_id = ${userId}
    `;
  }
}

/**
 * Get the credit cards for a user.
 *
 * @param {number} user_id - The ID of the user.
 * @return {Promise<Array>} A promise that resolves to an array of card objects, or rejects with an error.
 */
export async function getCards() {
  const session = await auth();
  const userId = session?.user?.id;
  try {
    if (session.user) {
      const data = await sql`
        SELECT * 
        FROM cards
        WHERE user_id = ${user_id} 
        AND status`;
      return data.rows;
    }
    // Query the database for the user's cards
    // Return the cards as an array of rows
  } catch (error) {
    // If an error occurs, return the error as a JSON response
    return NextResponse.json(error);
  }
}

/**
 * Send money from one card to another.
 *
 * @param {string} number_sender - The card number of the sender.
 * @param {string} number_receiver - The card number of the receiver.
 * @param {number} amount - The amount of money to send.
 * @return {Promise} A promise that resolves when the money is transferred, or rejects with an error.
 */
export async function sendMoney(number_sender, number_receiver, amount) {
  try {
    // Increase the receiver's balance by the amount sent
    await sql`update cards set amount = amount + ${amount} where id = ${number_receiver}`;

    // Decrease the sender's balance by the amount sent
    await sql`update cards set amount = amount - ${amount} where id = ${number_sender}`;
    // Create a new movement record
    createMovement(number_sender, number_receiver, amount);
  } catch (error) {
    // If an error occurs, return the error as a JSON response
    return NextResponse.json(error);
  }
}

/**
 * Deposit money into a card.
 *
 * @param {string} number_receiver - The card number of the receiver.
 * @param {number} amount - The amount of money to deposit.
 * @return {Promise} A promise that resolves when the money is deposited, or rejects with an error.
 */
export async function depositMoney(number_receiver, amount) {
  // Get the current session
  const session = await auth();
  try {
    // If the user is logged in
    if (session?.user) {
      // Get the user's ID
      const user_id_receiver = parseInt(session.user.id);
      // Set the sender's card number and user ID
      const number_sender = "0000000000000000";
      const user_id_sender = 2;
      // Increase the receiver's balance by the deposit amount
      await sql`update cards set amount = amount + ${amount} where id = ${number_receiver}`;
      // Create a new movement record
      await sql`
        insert into movements (number_sender, number_receiver, amount, user_id_sender, user_id_receiver) 
        values (${number_sender}, ${number_receiver}, ${amount}, ${user_id_sender}, ${user_id_receiver})`;
    }
  } catch (error) {
    // If an error occurs, return the error as a JSON response
    return NextResponse.json(error);
  }
}

/**
 * Withdraw money from a card.
 *
 * @param {string} number_sender - The card number of the sender.
 * @param {number} amount - The amount of money to withdraw.
 * @return {Promise} A promise that resolves when the money is withdrawn, or rejects with an error.
 */
export async function withdrawMoney(number_sender, amount) {
  // Get the current session
  const session = await auth();
  try {
    // If the user is logged in
    if (session?.user) {
      // Get the user's ID
      const user_id_sender = parseInt(session.user.id);
      // Set the receiver's card number and user ID
      const number_receiver = "0000000000000001";
      const user_id_receiver = 2;
      // Decrease the sender's balance by the withdrawal amount
      await sql`update cards set amount = amount - ${amount} where id = ${number_sender}`;
      // Create a new movement record
      await sql`
        insert into movements (number_sender, number_receiver, amount, user_id_sender, user_id_receiver) 
        values (${number_sender}, ${number_receiver}, ${amount}, ${user_id_sender}, ${user_id_receiver})`;
    }
  } catch (error) {
    // If an error occurs, return the error as a JSON response
    return NextResponse.json(error);
  }
}

/**
 * Update the name of a card.
 *
 * @param {string} id - The ID of the card.
 * @param {string} name - The new name of the card.
 * @return {Promise} A promise that resolves when the card is updated, or rejects with an error.
 */
export async function updateCard(id, name) {
  try {
    // Update the name of the card in the database
    await sql`
      update cards
      set name = ${name}
      where id = ${id}`;
  } catch (error) {
    // If an error occurs, return the error as a JSON response
    return NextResponse.json(error);
  }
}
