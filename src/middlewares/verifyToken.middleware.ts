import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import jwt from "jsonwebtoken";

export class VerifyToken {
  static execute(request: Request, response: Response, next: NextFunction) {
    const authorization = request.headers.authorization;

    if (!authorization) {
      throw new AppError(401, "Token is required");
    }

    const token = authorization?.replace("Bearer ", "");

    const secret = process.env.JWT_SECRET as string;

    jwt.verify(token, secret);

    response.locals.decode = jwt.decode(token);

    next();
  }
}
