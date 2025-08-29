/* eslint-disable */
// @ts-nocheck
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
  updatedAt: z.string().datetime(),
  createdAt: z.string().datetime(),
  url: z.string().url(),
});

/**
 * @description Неверные входные данные
 */
export const postApiCustomerLinksIdStatus400Schema = z.any();

export const postApiCustomerLinksIdStatusMutationRequestSchema = z.object({
  status: z.enum(["ENABLE", "DISABLE"]),
});

export const postApiCustomerLinksIdStatusMutationResponseSchema = z.lazy(() => postApiCustomerLinksIdStatus200Schema);
