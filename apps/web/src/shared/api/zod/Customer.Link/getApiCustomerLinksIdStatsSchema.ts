/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

export const getApiCustomerLinksIdStatsPathParamsSchema = z.object({
  id: z.string(),
});

export const getApiCustomerLinksIdStatsQueryParamsSchema = z.object({
  range: z.enum(["1w", "1m", "3m"]),
});

/**
 * @description Статистика ссылки
 */
export const getApiCustomerLinksIdStats200Schema = z.object({
  items: z.array(
    z.object({
      date: z.string(),
      value: z.number(),
    }),
  ),
});

/**
 * @description Неверные входные данные
 */
export const getApiCustomerLinksIdStats400Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Ресурс не найден
 */
export const getApiCustomerLinksIdStats404Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Неизвестная ошибка
 */
export const getApiCustomerLinksIdStats500Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

export const getApiCustomerLinksIdStatsQueryResponseSchema = z.lazy(() => getApiCustomerLinksIdStats200Schema);
