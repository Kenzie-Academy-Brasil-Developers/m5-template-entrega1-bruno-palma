import { prisma } from "../database/prisma";
import {
  TCategory,
  TCreateCategoryData,
} from "../interfaces/category.interfaces";

export class CategoryServices {
  async create(data: TCreateCategoryData): Promise<TCategory> {
    const newCategory = await prisma.category.create({ data });

    return newCategory;
  }

  async delete(id: number) {
    return await prisma.category.delete({ where: { id } });
  }
}
