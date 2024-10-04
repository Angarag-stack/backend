import express from "express";

import { getRecords, addRecord } from "../controller/records";

export const recordsRouter = express.Router();

recordsRouter.get("/", getRecords);

recordsRouter.post("/", addRecord);
