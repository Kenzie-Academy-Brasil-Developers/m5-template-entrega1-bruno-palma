import { Router } from "express";
import { TaskControllers } from "../controllers/task.controllers";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema";
import { IsTaskIdValid } from "../middlewares/isTaskIdValid.middleware";
import { CategoryQueryNameValid } from "../middlewares/categoryQueryNameValid.middleware";
import { CategoryBodyIdValid } from "../middlewares/categoryBodyIdValid.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";

export const taskRouter = Router();

const taskControllers = new TaskControllers();

taskRouter.post(
  "/",
  verifyToken.execute,
  ValidateRequest.execute({ body: createTaskSchema }),
  CategoryBodyIdValid.execute,
  taskControllers.create
);
taskRouter.get(
  "/",
  verifyToken.execute,
  CategoryQueryNameValid.execute,
  taskControllers.findMany
);
taskRouter.get(
  "/:id",
  verifyToken.execute,
  IsTaskIdValid.execute,
  taskControllers.findOne
);
taskRouter.patch(
  "/:id",
  verifyToken.execute,
  IsTaskIdValid.execute,
  ValidateRequest.execute({ body: updateTaskSchema }),
  CategoryBodyIdValid.execute,
  taskControllers.update
);
taskRouter.delete(
  "/:id",
  verifyToken.execute,
  IsTaskIdValid.execute,
  taskControllers.delete
);
