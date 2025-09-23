/* eslint-disable */
// @ts-nocheck
import { z } from "zod/v4";

/**
 * @description Объект ссылки
 */
export const postApiCustomerLinks200Schema = z.object({
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
  redirectUrl: z.url(),
});

export const postApiCustomerLinksMutationResponseSchema = postApiCustomerLinks200Schema;
