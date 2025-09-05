/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

export const getApiCustomerLinksIdStatsVisitsPathParamsSchema = z.object({
  id: z.string().uuid(),
});

export const getApiCustomerLinksIdStatsVisitsQueryParamsSchema = z.object({
  range: z.enum(["1w", "1m", "3m"]),
});

/**
 * @description Статистика переходов по ссылке
 */
export const getApiCustomerLinksIdStatsVisits200Schema = z.object({
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
export const getApiCustomerLinksIdStatsVisits400Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Ресурс не найден
 */
export const getApiCustomerLinksIdStatsVisits404Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Неизвестная ошибка
 */
export const getApiCustomerLinksIdStatsVisits500Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

export const getApiCustomerLinksIdStatsVisitsQueryResponseSchema = z.lazy(
  () => getApiCustomerLinksIdStatsVisits200Schema,
);
