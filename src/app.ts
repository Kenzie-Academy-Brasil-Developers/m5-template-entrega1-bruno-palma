import express, { json } from "express";
import "express-async-errors";
import helmet from "helmet";
import cors from "cors";
import "dotenv/config";
import { taskRouter } from "./routes/task.routes";
import { categoryRouter } from "./routes/category.routes";
import { HandleErrors } from "./middlewares/handleErrors.middleware";
import { userRouter } from "./routes/user.routes";

export const app = express();

app.use(cors());

app.use(helmet());

app.use(json());

app.use("/tasks", taskRouter);

app.use("/categories", categoryRouter);

app.use("/users", userRouter);

app.use(HandleErrors.execute);
