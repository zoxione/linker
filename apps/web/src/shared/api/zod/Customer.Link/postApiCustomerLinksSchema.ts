/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

/**
 * @description Объект ссылки
 */
export const postApiCustomerLinks200Schema = z.object({
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
export const postApiCustomerLinks400Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Неизвестная ошибка
 */
export const postApiCustomerLinks500Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

export const postApiCustomerLinksMutationRequestSchema = z.object({
  name: z.string().min(3).max(24),
  redirectUrl: z.string().url(),
});

export const postApiCustomerLinksMutationResponseSchema = z.lazy(() => postApiCustomerLinks200Schema);
