import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { prisma } from "../database/prisma";

export class IsTaskIdValid {
  static async execute(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const taskId = request.params.id;

    const { id } = response.locals.decode;

    const task = await prisma.task.findFirst({ where: { id: +taskId } });

    if (!task) {
      throw new AppError(404, "Task not found");
    } else if (task.userId != id) {
      throw new AppError(403, "This user is not the task owner");
    }

    next();
  }
}
