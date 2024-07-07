import { Request, Response } from "express";
import { TaskServices } from "../services/task.services";

export class TaskControllers {
  async create(request: Request, response: Response) {
    const taskServices = new TaskServices();

    const { id } = response.locals.decode;

    const task = await taskServices.create(request.body, id);

    return response.status(201).json(task);
  }

  async findMany(request: Request, response: Response) {
    const taskServices = new TaskServices();

    const { id } = response.locals.decode;

    const tasks = await taskServices.findMany(
      id,
      request.query.category as string
    );

    return response.status(200).json(tasks);
  }

  async findOne(request: Request, response: Response) {
    const taskServices = new TaskServices();

    const task = await taskServices.findOne(+request.params.id);

    return response.status(200).json(task);
  }

  async update(request: Request, response: Response) {
    const taskServices = new TaskServices();

    const task = await taskServices.update(+request.params.id, request.body);

    return response.status(200).json(task);
  }

  async delete(request: Request, response: Response) {
    const taskServices = new TaskServices();

    await taskServices.delete(+request.params.id);

    return response.status(204).json();
  }
}
