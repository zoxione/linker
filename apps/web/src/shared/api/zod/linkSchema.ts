/* eslint-disable */
// @ts-nocheck
import { z } from "zod/v4";

/**
 * @description Ссылка
 */
export const linkSchema = z
  .object({
    updatedAt: z.string().datetime(),
    createdAt: z.string().datetime(),
    id: z.uuid(),
    userId: z.uuid(),
    status: z.enum(["ENABLE", "DISABLE"]),
    name: z.string().min(3).max(24),
    token: z.string(),
    redirectUrl: z.url(),
    redirectCount: z.number(),
    url: z.url(),
  })
  .describe("Ссылка");
