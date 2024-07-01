import { z } from "zod";

export const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  email: z.string().min(1).email(),
  password: z.string().min(1),
});

export const createUserSchema = userSchema.pick({
  name: true,
  email: true,
  password: true,
});

export const responseUserSchema = userSchema.omit({ password: true });

export const loginUserSchema = userSchema.pick({ email: true, password: true });
