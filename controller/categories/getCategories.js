import { sql } from "../../database";

export const getCategories = async (_request, response) => {
  const category = await sql`SELECT * FROM category`;

  response.status(200).json({
    data: category,
  });
};
