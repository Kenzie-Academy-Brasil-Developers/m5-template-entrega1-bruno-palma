import express, { json } from "express";
import "express-async-errors";
import helmet from "helmet";
import { taskRouter } from "./routes/task.routes";
import { categoryRouter } from "./routes/category.routes";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/tasks", taskRouter);

app.use("/categories", categoryRouter);
