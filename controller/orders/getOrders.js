import { sql } from "../../database";

export const getOrders = async (_request, response) => {
  const orders = await sql`SELECT * FROM orders`;

  response.status(200).json({
    data: orders,
  });
};
