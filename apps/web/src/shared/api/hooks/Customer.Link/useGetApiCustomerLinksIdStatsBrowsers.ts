/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksIdStatsBrowsersQueryResponse,
  GetApiCustomerLinksIdStatsBrowsersPathParams,
  GetApiCustomerLinksIdStatsBrowsers400,
  GetApiCustomerLinksIdStatsBrowsers404,
  GetApiCustomerLinksIdStatsBrowsers500,
} from "../../types/Customer.Link/GetApiCustomerLinksIdStatsBrowsers";

export const getApiCustomerLinksIdStatsBrowsersQueryKey = (id: GetApiCustomerLinksIdStatsBrowsersPathParams["id"]) =>
  [{ url: "/api/customer/links/:id/stats/browsers", params: { id: id } }] as const;

export type GetApiCustomerLinksIdStatsBrowsersQueryKey = ReturnType<typeof getApiCustomerLinksIdStatsBrowsersQueryKey>;

/**
 * @summary Получить статистику браузеров ссылки по id
 * {@link /api/customer/links/:id/stats/browsers}
 */
export async function getApiCustomerLinksIdStatsBrowsers(
  id: GetApiCustomerLinksIdStatsBrowsersPathParams["id"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const res = await request<
    GetApiCustomerLinksIdStatsBrowsersQueryResponse,
    ResponseErrorConfig<
      | GetApiCustomerLinksIdStatsBrowsers400
      | GetApiCustomerLinksIdStatsBrowsers404
      | GetApiCustomerLinksIdStatsBrowsers500
    >,
    unknown
  >({ method: "GET", url: `/api/customer/links/${id}/stats/browsers`, ...requestConfig });
  return res.data;
}

export function getApiCustomerLinksIdStatsBrowsersQueryOptions(
  id: GetApiCustomerLinksIdStatsBrowsersPathParams["id"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksIdStatsBrowsersQueryKey(id);
  return queryOptions<
    GetApiCustomerLinksIdStatsBrowsersQueryResponse,
    ResponseErrorConfig<
      | GetApiCustomerLinksIdStatsBrowsers400
      | GetApiCustomerLinksIdStatsBrowsers404
      | GetApiCustomerLinksIdStatsBrowsers500
    >,
    GetApiCustomerLinksIdStatsBrowsersQueryResponse,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerLinksIdStatsBrowsers(id, config);
    },
  });
}

/**
 * @summary Получить статистику браузеров ссылки по id
 * {@link /api/customer/links/:id/stats/browsers}
 */
export function useGetApiCustomerLinksIdStatsBrowsers<
  TData = GetApiCustomerLinksIdStatsBrowsersQueryResponse,
  TQueryData = GetApiCustomerLinksIdStatsBrowsersQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksIdStatsBrowsersQueryKey,
>(
  id: GetApiCustomerLinksIdStatsBrowsersPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetApiCustomerLinksIdStatsBrowsersQueryResponse,
        ResponseErrorConfig<
          | GetApiCustomerLinksIdStatsBrowsers400
          | GetApiCustomerLinksIdStatsBrowsers404
          | GetApiCustomerLinksIdStatsBrowsers500
        >,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksIdStatsBrowsersQueryKey(id);

  const query = useQuery(
    {
      ...getApiCustomerLinksIdStatsBrowsersQueryOptions(id, config),
      queryKey,
      ...queryOptions,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | GetApiCustomerLinksIdStatsBrowsers400
      | GetApiCustomerLinksIdStatsBrowsers404
      | GetApiCustomerLinksIdStatsBrowsers500
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
