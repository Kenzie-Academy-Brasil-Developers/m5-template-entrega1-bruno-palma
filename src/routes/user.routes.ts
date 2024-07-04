import { Router } from "express";
import { UserControllers } from "../controllers/user.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";
import { createUserSchema, loginUserSchema } from "../schemas/user.schema";

export const userRouter = Router();

const userControllers = new UserControllers();

userRouter.post(
  "/",
  ValidateRequest.execute({ body: createUserSchema }),
  userControllers.register
);
userRouter.post(
  "/login",
  ValidateRequest.execute({ body: loginUserSchema }),
  userControllers.login
);
userRouter.get("/profile", verifyToken.execute, userControllers.autologin);
