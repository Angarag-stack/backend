import { sql } from "../../database";

export const getRecords = async (_request, response) => {
  const record = await sql`SELECT * FROM record`;

  response.status(200).json({
    data: record,
  });
};
