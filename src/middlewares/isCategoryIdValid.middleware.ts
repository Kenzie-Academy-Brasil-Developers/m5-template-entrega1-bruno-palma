import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { prisma } from "../database/prisma";

export class IsCategoryIdValid {
  static async execute(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const id = request.params.id;

    const category = await prisma.category.findFirst({ where: { id: +id } });

    if (!category) {
      throw new AppError(404, "Category not found");
    }

    next();
  }
}
