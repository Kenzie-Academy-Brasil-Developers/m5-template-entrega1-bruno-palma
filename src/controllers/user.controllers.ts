import { Request, Response } from "express";
import { UserServices } from "../services/user.services";

export class UserControllers {
  async register(request: Request, response: Response) {
    const userServices = new UserServices();

    const user = await userServices.register(request.body);

    return response.status(201).json(user);
  }
}
