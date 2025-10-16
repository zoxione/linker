/* eslint-disable */
// @ts-nocheck
import type { QueryClient, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksIdStatsBrowsers400,
  GetApiCustomerLinksIdStatsBrowsers404,
  GetApiCustomerLinksIdStatsBrowsers500,
  GetApiCustomerLinksIdStatsBrowsersPathParams,
  GetApiCustomerLinksIdStatsBrowsersQueryResponse,
} from "../../types/Customer.Link/GetApiCustomerLinksIdStatsBrowsers";

export const getApiCustomerLinksIdStatsBrowsersSuspenseQueryKey = (
  id: GetApiCustomerLinksIdStatsBrowsersPathParams["id"],
) => [{ url: "/api/customer/links/:id/stats/browsers", params: { id: id } }] as const;

export type GetApiCustomerLinksIdStatsBrowsersSuspenseQueryKey = ReturnType<
  typeof getApiCustomerLinksIdStatsBrowsersSuspenseQueryKey
>;

/**
 * @summary Получить статистику браузеров ссылки по id
 * {@link /api/customer/links/:id/stats/browsers}
 */
export async function getApiCustomerLinksIdStatsBrowsersSuspense(
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

export function getApiCustomerLinksIdStatsBrowsersSuspenseQueryOptions(
  id: GetApiCustomerLinksIdStatsBrowsersPathParams["id"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksIdStatsBrowsersSuspenseQueryKey(id);
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
      return getApiCustomerLinksIdStatsBrowsersSuspense(id, config);
    },
  });
}

/**
 * @summary Получить статистику браузеров ссылки по id
 * {@link /api/customer/links/:id/stats/browsers}
 */
export function useGetApiCustomerLinksIdStatsBrowsersSuspense<
  TData = GetApiCustomerLinksIdStatsBrowsersQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksIdStatsBrowsersSuspenseQueryKey,
>(
  id: GetApiCustomerLinksIdStatsBrowsersPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetApiCustomerLinksIdStatsBrowsersQueryResponse,
        ResponseErrorConfig<
          | GetApiCustomerLinksIdStatsBrowsers400
          | GetApiCustomerLinksIdStatsBrowsers404
          | GetApiCustomerLinksIdStatsBrowsers500
        >,
        TData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...queryOptions } = queryConfig;
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksIdStatsBrowsersSuspenseQueryKey(id);

  const query = useSuspenseQuery(
    {
      ...getApiCustomerLinksIdStatsBrowsersSuspenseQueryOptions(id, config),
      queryKey,
      ...queryOptions,
    } as unknown as UseSuspenseQueryOptions,
    queryClient,
  ) as UseSuspenseQueryResult<
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
