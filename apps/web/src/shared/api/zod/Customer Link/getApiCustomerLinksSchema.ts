/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

export const getApiCustomerLinksQueryParamsSchema = z
  .object({
    limit: z.coerce.number().min(0).max(100).nullable().nullish(),
    offset: z.coerce.number().min(0).max(9007199254740991).nullable().nullish(),
  })
  .optional();

/**
 * @description Список ссылок
 */
export const getApiCustomerLinks200Schema = z.object({
  limit: z.number().min(0).max(100).nullable(),
  offset: z.number().min(0).max(9007199254740991).nullable(),
  count: z.number(),
  total: z.number(),
  items: z.array(
    z.object({
      id: z.string(),
      userId: z.string(),
      status: z.enum(["ENABLE", "DISABLE"]),
      name: z.string().min(3).max(24),
      token: z.string(),
      redirectUrl: z.string().url(),
      redirectCount: z.number(),
      updatedAt: z.string().datetime(),
      createdAt: z.string().datetime(),
      url: z.string().url(),
    }),
  ),
});

/**
 * @description Неверные входные данные
 */
export const getApiCustomerLinks400Schema = z.any();

export const getApiCustomerLinksQueryResponseSchema = z.lazy(() => getApiCustomerLinks200Schema);
