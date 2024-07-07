import { prisma } from "../database/prisma";
import {
  TCategory,
  TCreateCategoryData,
} from "../interfaces/category.interfaces";

export class CategoryServices {
  async create(data: TCreateCategoryData, userId: number): Promise<TCategory> {
    const newCategory = { ...data, userId: userId };

    const category = await prisma.category.create({ data: newCategory });

    return category;
  }

  async delete(id: number) {
    return await prisma.category.delete({ where: { id } });
  }
}
