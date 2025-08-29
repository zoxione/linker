/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

export const putApiCustomerLinksIdPathParamsSchema = z.object({
  id: z.string(),
});

/**
 * @description Объект ссылки
 */
export const putApiCustomerLinksId200Schema = z.object({
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
});

/**
 * @description Неверные входные данные
 */
export const putApiCustomerLinksId400Schema = z.any();

/**
 * @description Ссылка не найдена
 */
export const putApiCustomerLinksId404Schema = z.any();

export const putApiCustomerLinksIdMutationRequestSchema = z.object({
  name: z.string().min(3).max(24),
});

export const putApiCustomerLinksIdMutationResponseSchema = z.lazy(() => putApiCustomerLinksId200Schema);
