/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

export const getApiCustomerLinksTokenVisitPathParamsSchema = z.object({
  token: z.string(),
});

/**
 * @description Перенаправление на целевую страницу
 */
export const getApiCustomerLinksTokenVisit302Schema = z.any();

/**
 * @description Неверные входные данные
 */
export const getApiCustomerLinksTokenVisit400Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Ресурс не найден
 */
export const getApiCustomerLinksTokenVisit404Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

/**
 * @description Неизвестная ошибка
 */
export const getApiCustomerLinksTokenVisit500Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});

export const getApiCustomerLinksTokenVisitQueryResponseSchema = z.any();
