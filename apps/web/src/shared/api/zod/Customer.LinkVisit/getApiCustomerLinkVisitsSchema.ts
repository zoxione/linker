/* eslint-disable */
// @ts-nocheck
import { z } from "zod/v4";

export const getApiCustomerLinkVisitsQueryParamsSchema = z
  .object({
    linkId: z.optional(z.uuid()),
    sortBy: z.optional(z.enum(["createdAt"])),
    sortOrder: z.optional(z.enum(["asc", "desc"])),
    limit: z.optional(z.coerce.number()),
    offset: z.optional(z.coerce.number()),
  })
  .optional();

/**
 * @description Список переходов по ссылкам
 */
export const getApiCustomerLinkVisits200Schema = z.object({
  limit: z.number(),
  offset: z.number(),
  count: z.number(),
  total: z.number(),
  items: z.array(
    z.object({
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
      updatedAt: z.string().datetime(),
      createdAt: z.string().datetime(),
      linkName: z.string().min(3).max(24),
    }),
  ),
});

/**
 * @description Неверные входные данные
 */
export const getApiCustomerLinkVisits400Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Неизвестная ошибка
 */
export const getApiCustomerLinkVisits500Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

export const getApiCustomerLinkVisitsQueryResponseSchema = z.lazy(() => getApiCustomerLinkVisits200Schema);
