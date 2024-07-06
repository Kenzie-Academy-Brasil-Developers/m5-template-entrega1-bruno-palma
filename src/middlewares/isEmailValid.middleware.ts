import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { prisma } from "../database/prisma";

export class IsEmailValid {
  static async execute(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const email = request.body.email;

    const user = await prisma.user.findFirst({ where: { email } });

    if (user) {
      throw new AppError(409, "This email is already registered");
    }

    next();
  }
}
