/* eslint-disable */
// @ts-nocheck

export type PutApiCustomerLinksIdPathParams = {
  /**
   * @type string, uuid
   */
  id: string;
};

export type PutApiCustomerLinksId200StatusEnum = "ENABLE" | "DISABLE";

/**
 * @description Объект ссылки
 */
export type PutApiCustomerLinksId200 = {
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
  status: PutApiCustomerLinksId200StatusEnum;
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
export type PutApiCustomerLinksId400 = {
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
export type PutApiCustomerLinksId404 = {
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
export type PutApiCustomerLinksId500 = {
  /**
   * @type number
   */
  statusCode: number;
  /**
   * @type string
   */
  message: string;
};

export type PutApiCustomerLinksIdMutationRequest = {
  /**
   * @minLength 3
   * @maxLength 24
   * @type string
   */
  name: string;
};

export type PutApiCustomerLinksIdMutationResponse = PutApiCustomerLinksId200;

export type PutApiCustomerLinksIdMutation = {
  Response: PutApiCustomerLinksId200;
  Request: PutApiCustomerLinksIdMutationRequest;
  PathParams: PutApiCustomerLinksIdPathParams;
  Errors: PutApiCustomerLinksId400 | PutApiCustomerLinksId404 | PutApiCustomerLinksId500;
};
