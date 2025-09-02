/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

export const getApiCustomerLinksIdStatsQueryParamsSchema = z.object({
  id: z.string(),
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
export const getApiCustomerLinksIdStats400Schema = z.any();

/**
 * @description Ссылка не найдена
 */
export const getApiCustomerLinksIdStats404Schema = z.any();

export const getApiCustomerLinksIdStatsQueryResponseSchema = z.lazy(() => getApiCustomerLinksIdStats200Schema);
