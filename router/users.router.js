import express from "express";
import { getUsers, addUser } from "../controller/Users";
import { signinUser } from "../controller/Users/signin";

export const usersRouter = express.Router();

usersRouter.get("/", getUsers);
usersRouter.post("/", addUser);

usersRouter.post("/signin", signinUser);
