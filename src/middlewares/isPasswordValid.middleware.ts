import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { prisma } from "../database/prisma";
import bcrypt from "bcrypt";
import { TUser } from "../interfaces/user.interfaces";

export class IsPasswordValid {
  static async execute(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const email = request.body.email;
    const password = request.body.password;

    const user = (await prisma.user.findFirst({ where: { email } })) as TUser;

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) {
      throw new AppError(401, "Email and password doesn't match");
    }

    next();
  }
}
