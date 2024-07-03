import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";
import {
  TCreateUserData,
  TLoginUserData,
  TResponseLoginData,
  TResponseUserData,
  TUser,
} from "../interfaces/user.interfaces";
import { responseUserSchema } from "../schemas/user.schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserServices {
  async register(data: TCreateUserData): Promise<TResponseUserData> {
    const hashPassword = await bcrypt.hash(data.password, 10);

    const newUser: TCreateUserData = {
      name: data.name,
      email: data.email,
      password: hashPassword,
    };

    const user = await prisma.user.create({ data: newUser });

    return responseUserSchema.parse(user);
  }

  async login(data: TLoginUserData): Promise<TResponseLoginData> {
    const user = (await prisma.user.findFirst({
      where: { email: data.email },
    })) as TUser;

    const newUser = responseUserSchema.parse(user);

    const secret = process.env.JWT_SECRET as string;

    const token = jwt.sign({ id: newUser.id }, secret, { expiresIn: "24h" });

    return { accessToken: token, user: newUser };
  }

  async autologin(id: number): Promise<TResponseUserData> {
    const user = await prisma.user.findFirst({ where: { id } });

    return responseUserSchema.parse(user);
  }
}
