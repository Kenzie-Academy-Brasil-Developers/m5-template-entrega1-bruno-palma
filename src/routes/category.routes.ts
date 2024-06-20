import { Router } from "express";
import { CategoryControllers } from "../controllers/category.controllers";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";
import { createCategorySchema } from "../schemas/category.schema";
import { IsCategoryIdValid } from "../middlewares/isCategoryIdValid.middleware";

export const categoryRouter = Router();

const categoryControllers = new CategoryControllers();

categoryRouter.post(
  "/",
  ValidateRequest.execute({ body: createCategorySchema }),
  categoryControllers.create
);
categoryRouter.delete(
  "/:id",
  IsCategoryIdValid.execute,
  categoryControllers.delete
);
