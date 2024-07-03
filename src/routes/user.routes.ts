import { Router } from "express";
import { UserControllers } from "../controllers/user.controllers";

export const userRouter = Router();

const userControllers = new UserControllers();

userRouter.post("/", userControllers.register);
userRouter.post("/login");
userRouter.get("/profile");
