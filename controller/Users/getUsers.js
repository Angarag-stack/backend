import { sql } from "../../database";

export const getUsers = async (_request, response) => {
  const users = await sql`SELECT * FROM users`;

  response.status(200).json({
    data: users,
  });
};
