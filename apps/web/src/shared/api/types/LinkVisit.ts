/* eslint-disable */
// @ts-nocheck

/**
 * @description Переход по ссылке
 */
export type LinkVisit = {
  /**
   * @type string, date-time
   */
  updatedAt: string;
  /**
   * @type string, date-time
   */
  createdAt: string;
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
};
