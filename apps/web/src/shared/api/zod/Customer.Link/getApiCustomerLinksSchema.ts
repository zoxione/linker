/* eslint-disable */
// @ts-nocheck
import { z } from "zod/v4";

export const getApiCustomerLinksQueryParamsSchema = z
  .object({
    sortBy: z.optional(z.enum(["name", "redirectCount", "createdAt"])),
    sortOrder: z.optional(z.enum(["asc", "desc"])),
    status: z.optional(z.enum(["ENABLE", "DISABLE"])),
    limit: z.optional(z.coerce.number()),
    offset: z.optional(z.coerce.number()),
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
      id: z.uuid(),
      userId: z.uuid(),
      status: z.enum(["ENABLE", "DISABLE"]),
      name: z.string().min(3).max(24),
      token: z.string(),
      redirectUrl: z.url(),
      redirectCount: z.number(),
      url: z.url(),
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
