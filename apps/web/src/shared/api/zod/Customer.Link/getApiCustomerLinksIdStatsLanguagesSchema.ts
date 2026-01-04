/* eslint-disable */
// @ts-nocheck
import { z } from "zod/v4";

export const getApiCustomerLinksIdStatsLanguagesPathParamsSchema = z.object({
  id: z.uuid(),
});

/**
 * @description Статистика языков ссылки
 */
export const getApiCustomerLinksIdStatsLanguages200Schema = z.object({
  items: z.array(
    z.object({
      language: z.string(),
      value: z.number(),
    }),
  ),
});

/**
 * @description Неверные входные данные
 */
export const getApiCustomerLinksIdStatsLanguages400Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Ресурс не найден
 */
export const getApiCustomerLinksIdStatsLanguages404Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Неизвестная ошибка
 */
export const getApiCustomerLinksIdStatsLanguages500Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

export const getApiCustomerLinksIdStatsLanguagesQueryResponseSchema = z.lazy(
  () => getApiCustomerLinksIdStatsLanguages200Schema,
);
