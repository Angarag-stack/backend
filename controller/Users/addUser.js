import { sql } from "../../database";
import { getUsers } from "../Users/getUsers";

export const addUser = async (request, response) => {
  const { email, name, password, avatar_img } = request.body;

  try {
    await sql`INSERT INTO users (email, name,  password, avatar_img)
            VALUES (${email}, ${name}, ${password}, ${avatar_img})`;

    response.status(200).json({ user: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
};
