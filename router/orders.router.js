import express from "express";

import { getOrders, addOrder } from "../controller/orders";

export const ordersRouter = express.Router();

ordersRouter.get("/", getOrders);

ordersRouter.post("/", addOrder);
