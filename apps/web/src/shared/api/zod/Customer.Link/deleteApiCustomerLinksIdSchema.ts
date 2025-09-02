/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

export const deleteApiCustomerLinksIdPathParamsSchema = z.object({
  id: z.string(),
});

/**
 * @description Ссылка удалена
 */
export const deleteApiCustomerLinksId204Schema = z.any();

/**
 * @description Неверные входные данные
 */
export const deleteApiCustomerLinksId400Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Ресурс не найден
 */
export const deleteApiCustomerLinksId404Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Неизвестная ошибка
 */
export const deleteApiCustomerLinksId500Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

export const deleteApiCustomerLinksIdMutationResponseSchema = z.lazy(() => deleteApiCustomerLinksId204Schema);
