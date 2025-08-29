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
  updatedAt: z.string().datetime(),
  createdAt: z.string().datetime(),
  url: z.string().url(),
});

/**
 * @description Неверные входные данные
 */
export const postApiCustomerLinks400Schema = z.any();

export const postApiCustomerLinksMutationRequestSchema = z.object({
  name: z.string().min(3).max(24),
  redirectUrl: z.string().url(),
});

export const postApiCustomerLinksMutationResponseSchema = z.lazy(() => postApiCustomerLinks200Schema);
