/* eslint-disable */
// @ts-nocheck

export type GetApiCustomerLinksTokenVisitPathParams = {
  /**
   * @type string
   */
  token: string;
};

/**
 * @description Перенаправление на целевую страницу
 */
export type GetApiCustomerLinksTokenVisit302 = any;

/**
 * @description Неверные входные данные
 */
export type GetApiCustomerLinksTokenVisit400 = {
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
export type GetApiCustomerLinksTokenVisit404 = {
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
export type GetApiCustomerLinksTokenVisit500 = {
  /**
   * @type number
   */
  statusCode: number;
  /**
   * @type string
   */
  message: string;
};

export type GetApiCustomerLinksTokenVisitQueryResponse = any;

export type GetApiCustomerLinksTokenVisitQuery = {
  Response: any;
  PathParams: GetApiCustomerLinksTokenVisitPathParams;
  Errors: GetApiCustomerLinksTokenVisit400 | GetApiCustomerLinksTokenVisit404 | GetApiCustomerLinksTokenVisit500;
};
