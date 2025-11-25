/* eslint-disable */
// @ts-nocheck
import { z } from "zod/v4";

/**
 * @description Пользователь
 */
export const userSchema = z
  .object({
    updatedAt: z.string().datetime(),
    createdAt: z.string().datetime(),
    id: z.uuid(),
    email: z.email(),
    emailVerified: z.optional(z.boolean()),
    name: z.string().min(3).max(24),
    image: z.nullable(z.url()),
  })
  .describe("Пользователь");
