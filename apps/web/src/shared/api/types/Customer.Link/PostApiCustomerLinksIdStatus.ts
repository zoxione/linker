/* eslint-disable */
// @ts-nocheck

export type PostApiCustomerLinksIdStatusPathParams = {
  /**
   * @type string, uuid
   */
  id: string;
};

export type PostApiCustomerLinksIdStatus200StatusEnum = "ENABLE" | "DISABLE";

/**
 * @description Объект ссылки
 */
export type PostApiCustomerLinksIdStatus200 = {
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
  status: PostApiCustomerLinksIdStatus200StatusEnum;
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
export type PostApiCustomerLinksIdStatus400 = {
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
export type PostApiCustomerLinksIdStatus404 = {
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
export type PostApiCustomerLinksIdStatus500 = {
  /**
   * @type number
   */
  statusCode: number;
  /**
   * @type string
   */
  message: string;
};

export type PostApiCustomerLinksIdStatusMutationRequestStatusEnum = "ENABLE" | "DISABLE";

export type PostApiCustomerLinksIdStatusMutationRequest = {
  /**
   * @type string
   */
  status: PostApiCustomerLinksIdStatusMutationRequestStatusEnum;
};

export type PostApiCustomerLinksIdStatusMutationResponse = PostApiCustomerLinksIdStatus200;

export type PostApiCustomerLinksIdStatusMutation = {
  Response: PostApiCustomerLinksIdStatus200;
  Request: PostApiCustomerLinksIdStatusMutationRequest;
  PathParams: PostApiCustomerLinksIdStatusPathParams;
  Errors: PostApiCustomerLinksIdStatus400 | PostApiCustomerLinksIdStatus404 | PostApiCustomerLinksIdStatus500;
};
