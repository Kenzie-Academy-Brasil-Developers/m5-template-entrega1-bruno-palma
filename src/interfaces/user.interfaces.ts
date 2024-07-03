import { z } from "zod";
import {
  createUserSchema,
  loginUserSchema,
  responseUserSchema,
  userSchema,
} from "../schemas/user.schema";

export type TUser = z.infer<typeof userSchema>;
export type TCreateUserData = z.infer<typeof createUserSchema>;
export type TResponseUserData = z.infer<typeof responseUserSchema>;
export type TLoginUserData = z.infer<typeof loginUserSchema>;
export type TResponseLoginData = {
  accessToken: string;
  user: TResponseUserData;
};
