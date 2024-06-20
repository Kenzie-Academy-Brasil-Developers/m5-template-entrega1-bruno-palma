import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { prisma } from "../database/prisma";

export class IsTaskIdValid {
  static async execute(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const id = request.params.id;

    const task = await prisma.task.findFirst({ where: { id: +id } });

    if (!task) {
      throw new AppError(404, "Task not found");
    }

    next();
  }
}
