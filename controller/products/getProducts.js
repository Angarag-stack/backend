import { sql } from "../../database";

export const getProducts = async (_request, response) => {
  const products = await sql`SELECT * FROM products`;

  response.status(200).json({
    data: products,
  });
};
