/* eslint-disable */
// @ts-nocheck

export type GetApiCustomerLinksQueryParams = {
  /**
   * @type number | undefined
   */
  limit?: number;
  /**
   * @type number | undefined
   */
  offset?: number;
};

export type ItemsStatusEnum = "ENABLE" | "DISABLE";

/**
 * @description Список ссылок
 */
export type GetApiCustomerLinks200 = {
  /**
   * @type number
   */
  limit: number;
  /**
   * @type number
   */
  offset: number;
  /**
   * @type number
   */
  count: number;
  /**
   * @type number
   */
  total: number;
  /**
   * @type array
   */
  items: {
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
    status: ItemsStatusEnum;
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
  }[];
};

/**
 * @description Неверные входные данные
 */
export type GetApiCustomerLinks400 = any;

export type GetApiCustomerLinksQueryResponse = GetApiCustomerLinks200;

export type GetApiCustomerLinksQuery = {
  Response: GetApiCustomerLinks200;
  QueryParams: GetApiCustomerLinksQueryParams;
  Errors: GetApiCustomerLinks400;
};
