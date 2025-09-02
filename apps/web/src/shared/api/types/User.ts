/* eslint-disable */
// @ts-nocheck

/**
 * @description Пользователь
 */
export type User = {
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
   * @type string, email
   */
  email: string;
  /**
   * @type boolean | undefined
   */
  emailVerified?: boolean;
  /**
   * @minLength 3
   * @maxLength 24
   * @type string
   */
  name: string;
  /**
   * @type string,null, uri
   */
  image: string | null;
};
