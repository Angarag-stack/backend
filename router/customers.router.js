import express from "express";

import { getCustomers, addCustomer } from "../controller/customers";

export const customersRouter = express.Router();

customersRouter.get("/", getCustomers);

customersRouter.post("/", addCustomer);
