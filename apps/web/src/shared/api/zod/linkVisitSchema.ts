/* eslint-disable */
// @ts-nocheck
import { z } from "zod/v4";

/**
 * @description Переход по ссылке
 */
export const linkVisitSchema = z
  .object({
    updatedAt: z.string().datetime(),
    createdAt: z.string().datetime(),
    id: z.uuid(),
    linkId: z.uuid(),
    ip: z.nullable(z.string()),
    language: z.nullable(z.string()),
    browser: z.nullable(z.string()),
    cpu: z.nullable(z.string()),
    device: z.nullable(z.string()),
    engine: z.nullable(z.string()),
    os: z.nullable(z.string()),
    referer: z.nullable(z.string()),
    headers: z.string(),
  })
  .describe("Переход по ссылке");
