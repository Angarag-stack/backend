import express from "express";

import { categoriesRouter } from "./router/categories.router";
import { recordsRouter } from "./router/records.router";
import { usersRouter } from "./router/users.router";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const port = 8000;

app.use("/categories", categoriesRouter);
app.use("/records", recordsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
});
