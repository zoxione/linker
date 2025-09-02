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
export type GetApiCustomerLinksIdStats400 = {
  /**
   * @type number
   */
  statusCode: number;
  /**
   * @type string
   */
  message: string;
};

/**
 * @description Ресурс не найден
 */
export type GetApiCustomerLinksIdStats404 = {
  /**
   * @type number
   */
  statusCode: number;
  /**
   * @type string
   */
  message: string;
};

/**
 * @description Неизвестная ошибка
 */
export type GetApiCustomerLinksIdStats500 = {
  /**
   * @type number
   */
  statusCode: number;
  /**
   * @type string
   */
  message: string;
};

export type GetApiCustomerLinksIdStatsQueryResponse = GetApiCustomerLinksIdStats200;

export type GetApiCustomerLinksIdStatsQuery = {
  Response: GetApiCustomerLinksIdStats200;
  PathParams: GetApiCustomerLinksIdStatsPathParams;
  QueryParams: GetApiCustomerLinksIdStatsQueryParams;
  Errors: GetApiCustomerLinksIdStats400 | GetApiCustomerLinksIdStats404 | GetApiCustomerLinksIdStats500;
};
