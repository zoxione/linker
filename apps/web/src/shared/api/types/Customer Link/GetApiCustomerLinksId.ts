export type GetApiCustomerLinksIdPathParams = {
  /**
   * @type string
   */
  id: string;
};

export type GetApiCustomerLinksId200StatusEnum = "ENABLE" | "DISABLE";

/**
 * @description Объект ссылки
 */
export type GetApiCustomerLinksId200 = {
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
   * @type string, date
   */
  updatedAt: string;
  /**
   * @type string, date
   */
  createdAt: string;
  /**
   * @type string
   */
  url: string;
};

/**
 * @description Неверные входные данные
 */
export type GetApiCustomerLinksId400 = any;

/**
 * @description Ссылка не найдена
 */
export type GetApiCustomerLinksId404 = any;

export type GetApiCustomerLinksIdQueryResponse = GetApiCustomerLinksId200;

export type GetApiCustomerLinksIdQuery = {
  Response: GetApiCustomerLinksId200;
  PathParams: GetApiCustomerLinksIdPathParams;
  Errors: GetApiCustomerLinksId400 | GetApiCustomerLinksId404;
};
