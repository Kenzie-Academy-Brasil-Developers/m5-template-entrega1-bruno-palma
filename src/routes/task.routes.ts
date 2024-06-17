import { Router } from "express";
import { TaskControllers } from "../controllers/task.controllers";

export const taskRouter = Router();

const taskControllers = new TaskControllers();

taskRouter.post("/", taskControllers.create);
taskRouter.get("/", taskControllers.findMany);
taskRouter.get("/:id", taskControllers.findOne);
taskRouter.patch("/:id", taskControllers.update);
taskRouter.delete("/:id", taskControllers.delete);
