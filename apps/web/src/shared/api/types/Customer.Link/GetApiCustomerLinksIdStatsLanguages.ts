/* eslint-disable */
// @ts-nocheck

export type GetApiCustomerLinksIdStatsLanguagesPathParams = {
  /**
   * @type string
   */
  id: string;
};

/**
 * @description Статистика языков ссылки
 */
export type GetApiCustomerLinksIdStatsLanguages200 = {
  /**
   * @type array
   */
  items: {
    /**
     * @type string
     */
    language: string;
    /**
     * @type number
     */
    value: number;
  }[];
};

/**
 * @description Неверные входные данные
 */
export type GetApiCustomerLinksIdStatsLanguages400 = {
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
export type GetApiCustomerLinksIdStatsLanguages404 = {
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
export type GetApiCustomerLinksIdStatsLanguages500 = {
  /**
   * @type number
   */
  statusCode: number;
  /**
   * @type string
   */
  message: string;
};

export type GetApiCustomerLinksIdStatsLanguagesQueryResponse = GetApiCustomerLinksIdStatsLanguages200;

export type GetApiCustomerLinksIdStatsLanguagesQuery = {
  Response: GetApiCustomerLinksIdStatsLanguages200;
  PathParams: GetApiCustomerLinksIdStatsLanguagesPathParams;
  Errors:
    | GetApiCustomerLinksIdStatsLanguages400
    | GetApiCustomerLinksIdStatsLanguages404
    | GetApiCustomerLinksIdStatsLanguages500;
};
