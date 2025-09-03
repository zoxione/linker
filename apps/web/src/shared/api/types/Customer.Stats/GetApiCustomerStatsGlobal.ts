/* eslint-disable */
// @ts-nocheck

/**
 * @description Глобальная статистика
 */
export type GetApiCustomerStatsGlobal200 = {
  /**
   * @type number
   */
  totalLinks: number;
  /**
   * @type number
   */
  totalLinkVisits: number;
};

/**
 * @description Неверные входные данные
 */
export type GetApiCustomerStatsGlobal400 = {
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
export type GetApiCustomerStatsGlobal500 = {
  /**
   * @type number
   */
  statusCode: number;
  /**
   * @type string
   */
  message: string;
};

export type GetApiCustomerStatsGlobalQueryResponse = GetApiCustomerStatsGlobal200;

export type GetApiCustomerStatsGlobalQuery = {
  Response: GetApiCustomerStatsGlobal200;
  Errors: GetApiCustomerStatsGlobal400 | GetApiCustomerStatsGlobal500;
};
