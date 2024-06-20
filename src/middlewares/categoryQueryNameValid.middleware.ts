import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { prisma } from "../database/prisma";

export class CategoryQueryNameValid {
  static async execute(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const categoryName = request.query.category as string | null;

    if (!categoryName) {
      next();
    } else {
      const category = await prisma.category.findFirst({
        where: { name: categoryName },
      });

      if (!category) {
        throw new AppError(404, "Category not found");
      }

      next();
    }
  }
}
