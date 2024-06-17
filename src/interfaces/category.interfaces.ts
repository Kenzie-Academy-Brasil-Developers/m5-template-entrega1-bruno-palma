import { z } from "zod";
import {
  categorySchema,
  createCategorySchema,
} from "../schemas/category.schema";

export type TCategory = z.infer<typeof categorySchema>;
export type TCreateCategoryData = z.infer<typeof createCategorySchema>;
