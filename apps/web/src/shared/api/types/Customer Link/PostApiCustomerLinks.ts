export type PostApiCustomerLinks200StatusEnum = "ENABLE" | "DISABLE";

/**
 * @description Объект ссылки
 */
export type PostApiCustomerLinks200 = {
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
  status: PostApiCustomerLinks200StatusEnum;
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
export type PostApiCustomerLinks400 = any;

export type PostApiCustomerLinksMutationRequest = {
  /**
   * @minLength 3
   * @maxLength 24
   * @type string
   */
  name: string;
  /**
   * @type string, uri
   */
  redirectUrl: string;
};

export type PostApiCustomerLinksMutationResponse = PostApiCustomerLinks200;

export type PostApiCustomerLinksMutation = {
  Response: PostApiCustomerLinks200;
  Request: PostApiCustomerLinksMutationRequest;
  Errors: PostApiCustomerLinks400;
};
