import { z } from "zod";
import {
  taskSchema,
  createTaskSchema,
  updateTaskSchema,
  findTaskSchema,
} from "../schemas/task.schema";

export type TTask = z.infer<typeof taskSchema>;
export type TCreateTaskData = z.infer<typeof createTaskSchema>;
export type TUpdateTaskData = z.infer<typeof updateTaskSchema>;
export type TFindTaskData = z.infer<typeof findTaskSchema>;
