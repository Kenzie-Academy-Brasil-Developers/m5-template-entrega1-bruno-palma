import { Request, Response } from "express";
import { CategoryServices } from "../services/category.services";

export class CategoryControllers {
  async create(request: Request, response: Response) {
    const categoryServices = new CategoryServices();

    const { id } = response.locals.decode;

    const category = await categoryServices.create(request.body, id);

    return response.status(201).json(category);
  }

  async delete(request: Request, response: Response) {
    const categoryServices = new CategoryServices();

    await categoryServices.delete(+request.params.id);

    return response.status(204).json();
  }
}
