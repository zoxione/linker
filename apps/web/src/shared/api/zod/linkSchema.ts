/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

/**
 * @description Ссылка
 */
export const linkSchema = z
  .object({
    updatedAt: z.string().datetime(),
    createdAt: z.string().datetime(),
    id: z.string().uuid(),
    userId: z.string().uuid(),
    status: z.enum(["ENABLE", "DISABLE"]),
    name: z.string().min(3).max(24),
    token: z.string(),
    redirectUrl: z.string().url(),
    redirectCount: z.number(),
    url: z.string().url(),
  })
  .describe("Ссылка");
