/* eslint-disable */
// @ts-nocheck

export type PutApiCustomerLinksIdPathParams = {
  /**
   * @type string
   */
  id: string;
};

export type PutApiCustomerLinksId200StatusEnum = "ENABLE" | "DISABLE";

/**
 * @description Объект ссылки
 */
export type PutApiCustomerLinksId200 = {
  /**
   * @type string
   */
  id: string;
  /**
   * @type string
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
   * @type string, date-time
   */
  updatedAt: string;
  /**
   * @type string, date-time
   */
  createdAt: string;
  /**
   * @type string, uri
   */
  url: string;
};

/**
 * @description Неверные входные данные
 */
export type PutApiCustomerLinksId400 = any;

/**
 * @description Ссылка не найдена
 */
export type PutApiCustomerLinksId404 = any;

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
  Errors: PutApiCustomerLinksId400 | PutApiCustomerLinksId404;
};
