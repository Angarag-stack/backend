import { sql } from "../../database";

export const addCustomer = async (request, response) => {
  const { firstName, lastName, email, address } = request.body;

  try {
    await sql`INSERT INTO customers (firstName, lastName, email, address)
            VALUES (${firstName}, ${lastName}, ${email}, ${address})`;

    response.status(200).json({ customer: request.body });
  } catch (error) {
    response.status(400).json({ message: "aldaa garlaa" });
  }
};
