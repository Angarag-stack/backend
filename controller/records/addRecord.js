import { sql } from "../../database";

export const addRecord = async (request, response) => {
  const { user_id, name, amount, transaction_type, description, category_id } =
    request.body;

  try {
    await sql` INSERT INTO record (user_id, name, amount, transaction_type, description, category_id)
        VALUES(${user_id}, ${name},  ${amount}, ${transaction_type}, ${description}, ${category_id})`;

    response.status(200).json({ record: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
};
