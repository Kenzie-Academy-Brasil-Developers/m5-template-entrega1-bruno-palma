import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { prisma } from "../database/prisma";

export class CategoryBodyIdValid {
  static async execute(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const id = request.body.categoryId;

    if (!id) {
      return next();
    }

    const category = await prisma.category.findFirst({ where: { id: +id } });

    if (!category) {
      throw new AppError(404, "Category not found");
    }

    next();
  }
}
