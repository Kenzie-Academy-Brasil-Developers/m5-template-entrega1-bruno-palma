import { prisma } from "../database/prisma";
import {
  TCreateTaskData,
  TFindTaskData,
  TTask,
  TUpdateTaskData,
} from "../interfaces/task.interfaces";
import { findTaskSchema } from "../schemas/task.schema";

export class TaskServices {
  async create(data: TCreateTaskData, userId: number): Promise<TTask> {
    const newTask = { ...data, userId: userId };

    const task = await prisma.task.create({ data: newTask });

    return task;
  }

  async findMany(userId: number, search?: string): Promise<TFindTaskData[]> {
    const tasks = await prisma.task.findMany({
      where: { userId, ...(search && { category: { name: search } }) },
      include: { category: true },
    });

    return findTaskSchema.array().parse(tasks);
  }

  async findOne(id: number): Promise<TFindTaskData> {
    const task = await prisma.task.findFirst({
      where: { id },
      include: { category: true },
    });

    return findTaskSchema.parse(task);
  }

  async update(id: number, data: TUpdateTaskData): Promise<TTask> {
    const updatedTask = await prisma.task.update({ where: { id }, data });

    return updatedTask;
  }

  async delete(id: number) {
    return await prisma.task.delete({ where: { id } });
  }
}
