/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

export const getApiCustomerLinksIdPathParamsSchema = z.object({
  id: z.string(),
});

/**
 * @description Объект ссылки
 */
export const getApiCustomerLinksId200Schema = z.object({
  id: z.string(),
  userId: z.string(),
  status: z.enum(["ENABLE", "DISABLE"]),
  name: z.string().min(3).max(24),
  token: z.string(),
  redirectUrl: z.string().url(),
  redirectCount: z.number(),
  url: z.string().url(),
  updatedAt: z.string().datetime(),
  createdAt: z.string().datetime(),
});

/**
 * @description Неверные входные данные
 */
export const getApiCustomerLinksId400Schema = z.any();

/**
 * @description Ссылка не найдена
 */
export const getApiCustomerLinksId404Schema = z.any();

export const getApiCustomerLinksIdQueryResponseSchema = z.lazy(() => getApiCustomerLinksId200Schema);
