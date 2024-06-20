import { Router } from "express";
import { TaskControllers } from "../controllers/task.controllers";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema";
import { IsTaskIdValid } from "../middlewares/isTaskIdValid.middleware";
import { CategoryQueryNameValid } from "../middlewares/categoryQueryNameValid.middleware";
import { CategoryBodyIdValid } from "../middlewares/categoryBodyIdValid.middleware";

export const taskRouter = Router();

const taskControllers = new TaskControllers();

taskRouter.post(
  "/",
  ValidateRequest.execute({ body: createTaskSchema }),
  CategoryBodyIdValid.execute,
  taskControllers.create
);
taskRouter.get("/", CategoryQueryNameValid.execute, taskControllers.findMany);
taskRouter.get("/:id", IsTaskIdValid.execute, taskControllers.findOne);
taskRouter.patch(
  "/:id",
  IsTaskIdValid.execute,
  ValidateRequest.execute({ body: updateTaskSchema }),
  CategoryBodyIdValid.execute,
  taskControllers.update
);
taskRouter.delete("/:id", IsTaskIdValid.execute, taskControllers.delete);
