import { sql } from "../../database";

export const getCustomers = async (_request, response) => {
  const customers = await sql`SELECT * FROM customers`;

  response.status(200).json({
    data: customers,
  });
};
