/* eslint-disable */
// @ts-nocheck

export type DeleteApiCustomerLinksIdPathParams = {
  /**
   * @type string, uuid
   */
  id: string;
};

/**
 * @description Ссылка удалена
 */
export type DeleteApiCustomerLinksId204 = any;

/**
 * @description Неверные входные данные
 */
export type DeleteApiCustomerLinksId400 = {
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
export type DeleteApiCustomerLinksId404 = {
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
export type DeleteApiCustomerLinksId500 = {
  /**
   * @type number
   */
  statusCode: number;
  /**
   * @type string
   */
  message: string;
};

export type DeleteApiCustomerLinksIdMutationResponse = DeleteApiCustomerLinksId204;

export type DeleteApiCustomerLinksIdMutation = {
  Response: DeleteApiCustomerLinksId204;
  PathParams: DeleteApiCustomerLinksIdPathParams;
  Errors: DeleteApiCustomerLinksId400 | DeleteApiCustomerLinksId404 | DeleteApiCustomerLinksId500;
};
