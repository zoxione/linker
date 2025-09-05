/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

export const getApiCustomerLinksQueryParamsSchema = z
  .object({
    limit: z.coerce.number().optional(),
    offset: z.coerce.number().optional(),
  })
  .optional();

/**
 * @description Список ссылок
 */
export const getApiCustomerLinks200Schema = z.object({
  limit: z.number(),
  offset: z.number(),
  count: z.number(),
  total: z.number(),
  items: z.array(
    z.object({
      id: z.string().uuid(),
      userId: z.string().uuid(),
      status: z.enum(["ENABLE", "DISABLE"]),
      name: z.string().min(3).max(24),
      token: z.string(),
      redirectUrl: z.string().url(),
      redirectCount: z.number(),
      url: z.string().url(),
      updatedAt: z.string().datetime(),
      createdAt: z.string().datetime(),
    }),
  ),
});

/**
 * @description Неверные входные данные
 */
export const getApiCustomerLinks400Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Неизвестная ошибка
 */
export const getApiCustomerLinks500Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

export const getApiCustomerLinksQueryResponseSchema = z.lazy(() => getApiCustomerLinks200Schema);
