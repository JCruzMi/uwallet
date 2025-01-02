'use server';

import Format from '@/utils/format';

import { sql } from '@vercel/postgres';

import { NextResponse } from 'next/server';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { auth } from '../../auth';

import { createMovement } from './movements';
import { generateCreditCard } from './utils';

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
  revalidatePath('/dashboard');
  redirect('/dashboard');
}

export async function createCardWithId(name, id) {
  try {
    // If the user is authenticated
    // Generate a card ID
    const idCard = generateCreditCard();

    // Get the user ID from the session
    const userId = parseInt(id);

    // The initial amount is 0
    const amount = 0;

    // Insert the card into the database
    await sql`
        INSERT INTO
          cards (name, id, user_id, amount, ismain)
        VALUES
          (${name}, ${idCard}, ${userId}, ${amount}, true)
      `;
  } catch (error) {
    // If an error occurs, return the error as a JSON response
    return NextResponse.json(error);
  }
  revalidatePath('/dashboard');
  redirect('/dashboard');
}

/**
 * Delete a credit card from the database.
 *
 * @param {string} number_card - The card number to delete.
 * @return {Promise} A promise that resolves when the card is deleted, or rejects with an error.
 */
export async function deleteCard(number_card) {
  try {
    // Delete the card from the database
    await sql`
      UPDATE cards
      SET status = false
      WHERE
        id = ${number_card}
    `;
    const data = await sql`
      SELECT *
      FROM cards
      WHERE 
        id = ${number_card}
    `;
    const row = await data.rows[0];
    // Update main card and sum amount
    await sql`
      UPDATE cards
      SET amount = amount + ${row.amount}
      WHERE ismain = true
      AND user_id = ${row.user_id}
    `;
  } catch (error) {
    // If an error occurs, return the error as a JSON response
    return NextResponse.json(error);
  }
  revalidatePath('/dashboard');
  redirect('/dashboard');
}

/**
 * Get the credit cards for a user.
 *
 * @param {number} user_id - The ID of the user.
 * @return {Promise<Array>} A promise that resolves to an array of card objects, or rejects with an error.
 */
export async function getCards() {
  noStore();
  const session = await auth();
  try {
    if (session.user) {
      const userId = session?.user?.id;
      const data = await sql`
        SELECT * 
        FROM cards
        WHERE user_id = ${userId} 
        AND status`;

      return {
        cards: data.rows.sort((a, b) => a.created_at - b.created_at),
        amount: Format(data.rows.reduce((acc, item) => acc + item.amount, 0)),
      };
    }
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
  revalidatePath('/dashboard');
  redirect('/dashboard');
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
      // Set the sender's card number and user ID
      const number_sender = '0000000000000000';
      // Increase the receiver's balance by the deposit amount
      await sql`update cards set amount = amount + ${amount} where id = ${number_receiver}`;
      // Create a new movement record
      createMovement(number_sender, number_receiver, amount);
    }
  } catch (error) {
    // If an error occurs, return the error as a JSON response
    return NextResponse.json(error);
  }
  revalidatePath('/dashboard');
  redirect('/dashboard');
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
      // Set the receiver's card number and user ID
      const number_receiver = '0000000000000001';

      // Decrease the sender's balance by the withdrawal amount
      await sql`update cards set amount = amount - ${amount} where id = ${number_sender}`;
      // Create a new movement record
      createMovement(number_sender, number_receiver, amount);
    }
  } catch (error) {
    // If an error occurs, return the error as a JSON response
    return NextResponse.json(error);
  }
  revalidatePath('/dashboard');
  redirect('/dashboard');
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
  revalidatePath('/dashboard');
  redirect('/dashboard');
}
