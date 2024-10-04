import express from "express";

import { getCategories, addCategory } from "../controller/categories";

export const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories);

categoriesRouter.post("/", addCategory);
