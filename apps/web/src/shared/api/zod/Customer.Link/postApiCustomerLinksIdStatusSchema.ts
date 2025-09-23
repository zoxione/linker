/* eslint-disable */
// @ts-nocheck
import { z } from "zod/v4";

export const postApiCustomerLinksIdStatusPathParamsSchema = z.object({
  id: z.uuid(),
});

/**
 * @description Объект ссылки
 */
export const postApiCustomerLinksIdStatus200Schema = z.object({
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

export const postApiCustomerLinksIdStatusMutationResponseSchema = postApiCustomerLinksIdStatus200Schema;
