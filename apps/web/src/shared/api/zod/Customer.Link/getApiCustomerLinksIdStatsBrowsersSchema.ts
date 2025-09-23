/* eslint-disable */
// @ts-nocheck
import { z } from "zod/v4";

export const getApiCustomerLinksIdStatsBrowsersPathParamsSchema = z.object({
  id: z.uuid(),
});

/**
 * @description Статистика браузеров ссылки
 */
export const getApiCustomerLinksIdStatsBrowsers200Schema = z.object({
  items: z.array(
    z.object({
      browser: z.string(),
      value: z.number(),
    }),
  ),
});

/**
 * @description Неверные входные данные
 */
export const getApiCustomerLinksIdStatsBrowsers400Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Ресурс не найден
 */
export const getApiCustomerLinksIdStatsBrowsers404Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Неизвестная ошибка
 */
export const getApiCustomerLinksIdStatsBrowsers500Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

export const getApiCustomerLinksIdStatsBrowsersQueryResponseSchema = getApiCustomerLinksIdStatsBrowsers200Schema;
