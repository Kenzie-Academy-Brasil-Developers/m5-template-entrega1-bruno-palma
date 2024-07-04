import { Request, Response } from "express";
import { UserServices } from "../services/user.services";

export class UserControllers {
  async register(request: Request, response: Response) {
    const userServices = new UserServices();

    const user = await userServices.register(request.body);

    return response.status(201).json(user);
  }

  async login(request: Request, response: Response) {
    const userServices = new UserServices();

    const user = await userServices.login(request.body);

    return response.status(200).json(user);
  }

  async autologin(request: Request, response: Response) {
    const userServices = new UserServices();

    const { id } = response.locals.decode;

    const user = await userServices.autologin(id);

    return response.status(200).json(user);
  }
}
