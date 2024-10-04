import { sql } from "../../database";

export const addCategory = async (request, response) => {
  const { id, name, description, createdat, updatedat, catgeory_image } =
    request.body;

  try {
    await sql`INSERT INTO category (id, name, description, createdat, updatedat, category_image)
values (${id}, ${name}, ${description}, ${createdat}, ${updatedat}, ${catgeory_image})`;

    response.status(200).json({ category: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
};
