/* eslint-disable */
// @ts-nocheck

export type GetApiCustomerLinksIdStatsVisitsPathParams = {
  /**
   * @type string, uuid
   */
  id: string;
};

export type GetApiCustomerLinksIdStatsVisitsQueryParamsRangeEnum = "1w" | "1m" | "3m";

export type GetApiCustomerLinksIdStatsVisitsQueryParams = {
  /**
   * @type string
   */
  range: GetApiCustomerLinksIdStatsVisitsQueryParamsRangeEnum;
};

/**
 * @description Статистика переходов по ссылке
 */
export type GetApiCustomerLinksIdStatsVisits200 = {
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
export type GetApiCustomerLinksIdStatsVisits400 = {
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
export type GetApiCustomerLinksIdStatsVisits404 = {
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
export type GetApiCustomerLinksIdStatsVisits500 = {
  /**
   * @type number
   */
  statusCode: number;
  /**
   * @type string
   */
  message: string;
};

export type GetApiCustomerLinksIdStatsVisitsQueryResponse = GetApiCustomerLinksIdStatsVisits200;

export type GetApiCustomerLinksIdStatsVisitsQuery = {
  Response: GetApiCustomerLinksIdStatsVisits200;
  PathParams: GetApiCustomerLinksIdStatsVisitsPathParams;
  QueryParams: GetApiCustomerLinksIdStatsVisitsQueryParams;
  Errors:
    | GetApiCustomerLinksIdStatsVisits400
    | GetApiCustomerLinksIdStatsVisits404
    | GetApiCustomerLinksIdStatsVisits500;
};
