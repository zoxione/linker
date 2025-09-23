/* eslint-disable */
// @ts-nocheck
import { z } from "zod/v4";

/**
 * @description Глобальная статистика
 */
export const getApiCustomerStatsGlobal200Schema = z.object({
  totalLinks: z.number(),
  totalLinkVisits: z.number(),
});

/**
 * @description Неверные входные данные
 */
export const getApiCustomerStatsGlobal400Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Неизвестная ошибка
 */
export const getApiCustomerStatsGlobal500Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

export const getApiCustomerStatsGlobalQueryResponseSchema = getApiCustomerStatsGlobal200Schema;
