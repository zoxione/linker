/* eslint-disable */
// @ts-nocheck

export type LinkStatusEnum = "ENABLE" | "DISABLE";

/**
 * @description Ссылка
 */
export type Link = {
  /**
   * @type string, date-time
   */
  updatedAt: string;
  /**
   * @type string, date-time
   */
  createdAt: string;
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
  status: LinkStatusEnum;
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
};
