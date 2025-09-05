/* eslint-disable */
// @ts-nocheck

export type GetApiCustomerLinkVisitsQueryParams = {
  /**
   * @type string | undefined, uuid
   */
  linkId?: string;
  /**
   * @type number | undefined
   */
  limit?: number;
  /**
   * @type number | undefined
   */
  offset?: number;
};

/**
 * @description Список переходов по ссылкам
 */
export type GetApiCustomerLinkVisits200 = {
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
     * @type string, uuid
     */
    id: string;
    /**
     * @type string, uuid
     */
    linkId: string;
    /**
     * @type string,null
     */
    ip: string | null;
    /**
     * @type string,null
     */
    language: string | null;
    /**
     * @type string,null
     */
    browser: string | null;
    /**
     * @type string,null
     */
    cpu: string | null;
    /**
     * @type string,null
     */
    device: string | null;
    /**
     * @type string,null
     */
    engine: string | null;
    /**
     * @type string,null
     */
    os: string | null;
    /**
     * @type string,null
     */
    referer: string | null;
    /**
     * @type string
     */
    headers: string;
    /**
     * @type string, date-time
     */
    updatedAt: string;
    /**
     * @type string, date-time
     */
    createdAt: string;
    /**
     * @minLength 3
     * @maxLength 24
     * @type string
     */
    linkName: string;
  }[];
};

/**
 * @description Неверные входные данные
 */
export type GetApiCustomerLinkVisits400 = {
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
export type GetApiCustomerLinkVisits500 = {
  /**
   * @type number
   */
  statusCode: number;
  /**
   * @type string
   */
  message: string;
};

export type GetApiCustomerLinkVisitsQueryResponse = GetApiCustomerLinkVisits200;

export type GetApiCustomerLinkVisitsQuery = {
  Response: GetApiCustomerLinkVisits200;
  QueryParams: GetApiCustomerLinkVisitsQueryParams;
  Errors: GetApiCustomerLinkVisits400 | GetApiCustomerLinkVisits500;
};
