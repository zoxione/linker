/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

export const postApiCustomerLinksIdStatusPathParamsSchema = z.object({
  id: z.string().uuid(),
});

/**
 * @description Объект ссылки
 */
export const postApiCustomerLinksIdStatus200Schema = z.object({
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
});

/**
 * @description Неверные входные данные
 */
export const postApiCustomerLinksIdStatus400Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Ресурс не найден
 */
export const postApiCustomerLinksIdStatus404Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Неизвестная ошибка
 */
export const postApiCustomerLinksIdStatus500Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

export const postApiCustomerLinksIdStatusMutationRequestSchema = z.object({
  status: z.enum(["ENABLE", "DISABLE"]),
});

export const postApiCustomerLinksIdStatusMutationResponseSchema = z.lazy(() => postApiCustomerLinksIdStatus200Schema);
