/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

export const getApiCustomerLinksTokenTrackPathParamsSchema = z.object({
  token: z.string(),
});

/**
 * @description Перенаправление на целевую страницу
 */
export const getApiCustomerLinksTokenTrack302Schema = z.any();

/**
 * @description Неверные входные данные
 */
export const getApiCustomerLinksTokenTrack400Schema = z.any();

/**
 * @description Ссылка не найдена
 */
export const getApiCustomerLinksTokenTrack404Schema = z.any();

export const getApiCustomerLinksTokenTrackQueryResponseSchema = z.any();
