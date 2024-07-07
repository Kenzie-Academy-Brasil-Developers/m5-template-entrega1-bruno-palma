import { Router } from "express";
import { UserControllers } from "../controllers/user.controllers";
import { VerifyToken } from "../middlewares/verifyToken.middleware";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";
import { createUserSchema, loginUserSchema } from "../schemas/user.schema";
import { IsEmailValid } from "../middlewares/isEmailValid.middleware";
import { UserIsValid } from "../middlewares/userIsValid.middleware";
import { IsPasswordValid } from "../middlewares/isPasswordValid.middleware";

export const userRouter = Router();

const userControllers = new UserControllers();

userRouter.post(
  "/",
  ValidateRequest.execute({ body: createUserSchema }),
  IsEmailValid.execute,
  userControllers.register
);
userRouter.post(
  "/login",
  ValidateRequest.execute({ body: loginUserSchema }),
  UserIsValid.execute,
  IsPasswordValid.execute,
  userControllers.login
);
userRouter.get("/profile", VerifyToken.execute, userControllers.autologin);
