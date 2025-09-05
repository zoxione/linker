/* eslint-disable */
// @ts-nocheck

export type GetApiCustomerLinksIdPathParams = {
  /**
   * @type string, uuid
   */
  id: string;
};

export type GetApiCustomerLinksId200StatusEnum = "ENABLE" | "DISABLE";

/**
 * @description Объект ссылки
 */
export type GetApiCustomerLinksId200 = {
  /**
   * @type string, uuid
   */
  id: string;
  /**
   * @type string, uuid
   */
  userId: string;
  /**
   * @type string
   */
  status: GetApiCustomerLinksId200StatusEnum;
  /**
   * @minLength 3
   * @maxLength 24
   * @type string
   */
  name: string;
  /**
   * @type string
   */
  token: string;
  /**
   * @type string, uri
   */
  redirectUrl: string;
  /**
   * @type number
   */
  redirectCount: number;
  /**
   * @type string, uri
   */
  url: string;
  /**
   * @type string, date-time
   */
  updatedAt: string;
  /**
   * @type string, date-time
   */
  createdAt: string;
};

/**
 * @description Неверные входные данные
 */
export type GetApiCustomerLinksId400 = {
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
export type GetApiCustomerLinksId404 = {
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
export type GetApiCustomerLinksId500 = {
  /**
   * @type number
   */
  statusCode: number;
  /**
   * @type string
   */
  message: string;
};

export type GetApiCustomerLinksIdQueryResponse = GetApiCustomerLinksId200;

export type GetApiCustomerLinksIdQuery = {
  Response: GetApiCustomerLinksId200;
  PathParams: GetApiCustomerLinksIdPathParams;
  Errors: GetApiCustomerLinksId400 | GetApiCustomerLinksId404 | GetApiCustomerLinksId500;
};
