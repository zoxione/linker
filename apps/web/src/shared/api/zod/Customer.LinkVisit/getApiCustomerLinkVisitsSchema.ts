/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

export const getApiCustomerLinkVisitsQueryParamsSchema = z
  .object({
    limit: z.coerce.number().optional(),
    offset: z.coerce.number().optional(),
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
      id: z.string(),
      linkId: z.string(),
      ip: z.string().nullable(),
      language: z.string().nullable(),
      browser: z.string().nullable(),
      cpu: z.string().nullable(),
      device: z.string().nullable(),
      engine: z.string().nullable(),
      os: z.string().nullable(),
      referer: z.string().nullable(),
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
