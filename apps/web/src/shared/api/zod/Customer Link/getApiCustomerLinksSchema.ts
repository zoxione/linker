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
  items: z.array(
    z.object({
      id: z.string(),
      userId: z.string(),
      status: z.enum(["ENABLE", "DISABLE"]),
      name: z.string().min(3).max(24),
      token: z.string(),
      redirectUrl: z.string().url(),
      redirectCount: z.number(),
      updatedAt: z.string().date(),
      createdAt: z.string().date(),
      url: z.string(),
    }),
  ),
  limit: z.number().min(0).max(100).nullable(),
  offset: z.number().min(0).max(9007199254740991).nullable(),
  total: z.number().nullable(),
});

/**
 * @description Неверные входные данные
 */
export const getApiCustomerLinks400Schema = z.any();

export const getApiCustomerLinksQueryResponseSchema = z.lazy(() => getApiCustomerLinks200Schema);
