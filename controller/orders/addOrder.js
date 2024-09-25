import { sql } from "../../database";

export const addOrder = async (request, response) => {
  const { customerId, productId, qunatity } = request.body;

  try {
    await sql`INSERT INTO orders (customerId, ProductId, Quantity)
values (${customerId}, ${productId}, ${qunatity})`;

    response.status(200).json({ order: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
};
