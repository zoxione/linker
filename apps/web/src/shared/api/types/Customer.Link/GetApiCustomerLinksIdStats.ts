/* eslint-disable */
// @ts-nocheck

export type GetApiCustomerLinksIdStatsPathParams = {
  /**
   * @type string
   */
  id: string;
};

export type GetApiCustomerLinksIdStatsQueryParamsRangeEnum = "1w" | "1m" | "3m";

export type GetApiCustomerLinksIdStatsQueryParams = {
  /**
   * @type string
   */
  range: GetApiCustomerLinksIdStatsQueryParamsRangeEnum;
};

/**
 * @description Статистика ссылки
 */
export type GetApiCustomerLinksIdStats200 = {
  /**
   * @type array
   */
  items: {
    /**
     * @type string
     */
    date: string;
    /**
     * @type number
     */
    value: number;
  }[];
};

/**
 * @description Неверные входные данные
 */
export type GetApiCustomerLinksIdStats400 = any;

/**
 * @description Ссылка не найдена
 */
export type GetApiCustomerLinksIdStats404 = any;

export type GetApiCustomerLinksIdStatsQueryResponse = GetApiCustomerLinksIdStats200;

export type GetApiCustomerLinksIdStatsQuery = {
  Response: GetApiCustomerLinksIdStats200;
  PathParams: GetApiCustomerLinksIdStatsPathParams;
  QueryParams: GetApiCustomerLinksIdStatsQueryParams;
  Errors: GetApiCustomerLinksIdStats400 | GetApiCustomerLinksIdStats404;
};
