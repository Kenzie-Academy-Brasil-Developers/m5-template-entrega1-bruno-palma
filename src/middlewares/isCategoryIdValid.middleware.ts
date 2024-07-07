import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { prisma } from "../database/prisma";

export class IsCategoryIdValid {
  static async execute(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const categoryId = request.params.id;

    const { id } = response.locals.decode;

    const category = await prisma.category.findFirst({
      where: { id: +categoryId },
    });

    if (!category) {
      throw new AppError(404, "Category not found");
    } else if (category.userId != id) {
      throw new AppError(403, "This user is not the category owner");
    }

    next();
  }
}
