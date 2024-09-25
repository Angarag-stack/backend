import express from "express";
import { getProducts, addProduct } from "../controller/products";

export const productsRouter = express.Router();

productsRouter.get("/", getProducts);
productsRouter.post("/", addProduct);
