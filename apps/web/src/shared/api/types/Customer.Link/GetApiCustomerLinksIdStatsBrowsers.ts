/* eslint-disable */
// @ts-nocheck

export type GetApiCustomerLinksIdStatsBrowsersPathParams = {
  /**
   * @type string
   */
  id: string;
};

/**
 * @description Статистика браузеров ссылки
 */
export type GetApiCustomerLinksIdStatsBrowsers200 = {
  /**
   * @type array
   */
  items: {
    /**
     * @type string
     */
    browser: string;
    /**
     * @type number
     */
    value: number;
  }[];
};

/**
 * @description Неверные входные данные
 */
export type GetApiCustomerLinksIdStatsBrowsers400 = {
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
export type GetApiCustomerLinksIdStatsBrowsers404 = {
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
export type GetApiCustomerLinksIdStatsBrowsers500 = {
  /**
   * @type number
   */
  statusCode: number;
  /**
   * @type string
   */
  message: string;
};

export type GetApiCustomerLinksIdStatsBrowsersQueryResponse = GetApiCustomerLinksIdStatsBrowsers200;

export type GetApiCustomerLinksIdStatsBrowsersQuery = {
  Response: GetApiCustomerLinksIdStatsBrowsers200;
  PathParams: GetApiCustomerLinksIdStatsBrowsersPathParams;
  Errors:
    | GetApiCustomerLinksIdStatsBrowsers400
    | GetApiCustomerLinksIdStatsBrowsers404
    | GetApiCustomerLinksIdStatsBrowsers500;
};
