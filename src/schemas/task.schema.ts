import { z } from "zod";

export const taskSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  content: z.string().min(1),
  finished: z.boolean(),
  categoryId: z.number().positive().optional(),
});

export const createTaskSchema = taskSchema.pick({
  title: true,
  content: true,
  categoryId: true,
});

export const updateTaskSchema = taskSchema.omit({ id: true }).partial();
