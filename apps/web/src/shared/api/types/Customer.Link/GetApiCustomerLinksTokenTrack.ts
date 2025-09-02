/* eslint-disable */
// @ts-nocheck

export type GetApiCustomerLinksTokenTrackPathParams = {
  /**
   * @type string
   */
  token: string;
};

/**
 * @description Перенаправление на целевую страницу
 */
export type GetApiCustomerLinksTokenTrack302 = any;

/**
 * @description Неверные входные данные
 */
export type GetApiCustomerLinksTokenTrack400 = any;

/**
 * @description Ссылка не найдена
 */
export type GetApiCustomerLinksTokenTrack404 = any;

export type GetApiCustomerLinksTokenTrackQueryResponse = any;

export type GetApiCustomerLinksTokenTrackQuery = {
  Response: any;
  PathParams: GetApiCustomerLinksTokenTrackPathParams;
  Errors: GetApiCustomerLinksTokenTrack400 | GetApiCustomerLinksTokenTrack404;
};
