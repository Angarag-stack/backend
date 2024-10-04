import { sql } from "../../database";

export const addRecord = async () => {
  const {
    id,
    user_id,
    amount,
    transaction_type,
    description,
    createdat,
    updatedat,
    category_id,
  } = request.body;
  try {
    await sql`INSERT INTO record (id, user_id, price, amount, transaction_type, createdat, updatedat, category_id )
        VALUES (${id}, ${user_id}, ${amount}, ${transaction_type}, ${description}, ${createdat}, ${updatedat}, ${category_id}`;

    response.status(200).json({ record: request.body });
  } catch (error) {
    response.status(400).json({ message: "aldaa garlaa" });
  }
};
