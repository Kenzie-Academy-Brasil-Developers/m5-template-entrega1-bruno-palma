import { Router } from "express";
import { CategoryControllers } from "../controllers/category.controllers";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";
import { createCategorySchema } from "../schemas/category.schema";
import { IsCategoryIdValid } from "../middlewares/isCategoryIdValid.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";

export const categoryRouter = Router();

const categoryControllers = new CategoryControllers();

categoryRouter.post(
  "/",
  verifyToken.execute,
  ValidateRequest.execute({ body: createCategorySchema }),
  categoryControllers.create
);
categoryRouter.delete(
  "/:id",
  verifyToken.execute,
  IsCategoryIdValid.execute,
  categoryControllers.delete
);
