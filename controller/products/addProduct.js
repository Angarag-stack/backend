import { sql } from "../../database";

export const addProduct = async () => {
  const { productid, productname, price } = request.body;
  try {
    await sql`INSERT INTO customers (productid, productname, price)
        VALUES (${productid}, ${productname}, ${price})`;

    response.status(200).json({ product: request.body });
  } catch (error) {
    response.status(400).json({ message: "aldaa garlaa" });
  }
};
