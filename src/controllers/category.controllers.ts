import { Request, Response } from "express";
import { CategoryServices } from "../services/category.services";

export class CategoryControllers {
  create(request: Request, response: Response) {
    const categoryServices = new CategoryServices();
  }

  delete(request: Request, response: Response) {
    const categoryServices = new CategoryServices();
  }
}
