import { sql } from "../../database";
import { getUsers } from "../Users/getUsers";

export const signinUser = async (request, response) => {
  const { email, password } = request.body;

  try {
    const users = await sql` SELECT email, id FROM  users 
        WHERE email = ${email} 
        AND password= ${password}`;
    response.status(200).json({ user: users[0] });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
};
