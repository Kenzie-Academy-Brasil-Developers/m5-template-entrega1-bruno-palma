import { Request, Response } from "express";
import { TaskServices } from "../services/task.services";

export class TaskControllers {
  create(request: Request, response: Response) {
    const taskServices = new TaskServices();
  }

  findMany(request: Request, response: Response) {
    const taskServices = new TaskServices();
  }

  findOne(request: Request, response: Response) {
    const taskServices = new TaskServices();
  }

  update(request: Request, response: Response) {
    const taskServices = new TaskServices();
  }

  delete(request: Request, response: Response) {
    const taskServices = new TaskServices();
  }
}
