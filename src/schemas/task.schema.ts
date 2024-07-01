import { z } from "zod";
import { categorySchema } from "./category.schema";

export const taskSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  content: z.string().min(1),
  finished: z.boolean(),
  categoryId: z.number().positive().nullish(),
  userId: z.number().positive(),
});

export const createTaskSchema = taskSchema.pick({
  title: true,
  content: true,
  categoryId: true,
  userId: true,
});

export const updateTaskSchema = taskSchema.omit({ id: true }).partial();

export const findTaskSchema = taskSchema
  .omit({ categoryId: true })
  .extend({ category: categorySchema.nullish() });
