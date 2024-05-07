"use server";

import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { auth } from "../../auth";

/**
 * Creates a new movement in the database.
 *
 * @param {string} number_sender - The sender's card number.
 * @param {string} number_receiver - The receiver's card number.
 * @param {number} amount - The amount of the movement.
 * @return {Promise<void>} A promise that resolves when the movement is created, or rejects with an error.
 */
export async function createMovement(number_sender, number_receiver, amount) {
  try {
    // Retrieve the IDs of the sender and receiver from the database
    const user_id_sender = await sql`
      SELECT c.user_id id
      FROM cards c
      WHERE c.id = ${number_sender}`;

    const user_id_receiver = await sql`
      SELECT  c.user_id id
      FROM cards c
      WHERE c.id = ${number_receiver}`;

    // Insert the new movement into the database
    await sql`
      insert into movements (number_sender, number_receiver, amount, user_id_sender, user_id_receiver)
      values (${number_sender}, ${number_receiver}, ${amount}, ${parseInt(user_id_sender.rows[0].id)}, ${parseInt(user_id_receiver.rows[0].id)})`;
  } catch (error) {
    // If an error occurs, return the error as a JSON response
    return NextResponse.json(error);
  }
}

/**
 * Deletes a movement from the database.
 *
 * @param {number} id - The ID of the movement to delete.
 * @return {Promise<void>} A promise that resolves when the movement is deleted.
 * @throws {Error} If there is an error deleting the movement.
 */
export async function deleteMovement(id) {
  try {
    // Delete the movement from the database.
    await sql`delete from movements where id = ${id}`;
  } catch (error) {
    // If there is an error, return a JSON response with the error.
    return NextResponse.json(error);
  }
}

/**
 * Retrieves the movements for the current user.
 *
 * @return {Promise<Array>} A promise that resolves to an array of movement objects,
 * or rejects with an error if there is an issue retrieving the data.
 */
export async function getMovements() {
  // Authenticate the user
  const session = await auth();

  // If the user is authenticated
  if (session?.user) {
    try {
      // Query the database for the user's movements
      const data = await sql`
        SELECT * , 
        case when user_id_sender = 2 then 'true' else 'false' end as deposit,
        case when user_id_receiver = 2 then 'true' else 'false' end as draw,
        case when user_id_sender <> 2 and user_id_receiver <> 2 then 'transfer' 
        when user_id_sender = ${session?.user.id} then 'draw' 
        WHEN user_id_receiver = ${session?.user.id}  then 'deposit' end as type
        FROM movements
        WHERE user_id_sender = ${session?.user.id}
        OR user_id_receiver = ${session?.user.id}`;

      // Return the movements as an array of rows
      return data.rows;
    } catch (error) {
      // If an error occurs, return the error as a JSON response
      return NextResponse.json(error);
    }
  }
}
