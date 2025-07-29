import { z } from "zod";

export const postApiCustomerLinksIdStatusPathParamsSchema = z.object({
  id: z.string(),
});

/**
 * @description Объект ссылки
 */
export const postApiCustomerLinksIdStatus200Schema = z.object({
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
});

/**
 * @description Неверные входные данные
 */
export const postApiCustomerLinksIdStatus400Schema = z.any();

export const postApiCustomerLinksIdStatusMutationRequestSchema = z.object({
  status: z.enum(["ENABLE", "DISABLE"]),
});

export const postApiCustomerLinksIdStatusMutationResponseSchema = z.lazy(() => postApiCustomerLinksIdStatus200Schema);
