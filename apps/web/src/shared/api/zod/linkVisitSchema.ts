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
    ip: z.string().nullable(),
    language: z.string().nullable(),
    browser: z.string().nullable(),
    cpu: z.string().nullable(),
    device: z.string().nullable(),
    engine: z.string().nullable(),
    os: z.string().nullable(),
    referer: z.string().nullable(),
    headers: z.string(),
  })
  .describe("Переход по ссылке");
