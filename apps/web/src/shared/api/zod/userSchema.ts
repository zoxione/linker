/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

/**
 * @description Пользователь
 */
export const userSchema = z
  .object({
    updatedAt: z.string().datetime(),
    createdAt: z.string().datetime(),
    id: z.string().uuid(),
    email: z.string().email(),
    emailVerified: z.boolean().optional(),
    name: z.string().min(3).max(24),
    image: z.string().url().nullable(),
  })
  .describe("Пользователь");
