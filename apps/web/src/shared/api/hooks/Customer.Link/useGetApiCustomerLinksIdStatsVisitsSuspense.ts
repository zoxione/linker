/* eslint-disable */
// @ts-nocheck
import type { QueryClient, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksIdStatsVisits400,
  GetApiCustomerLinksIdStatsVisits404,
  GetApiCustomerLinksIdStatsVisits500,
  GetApiCustomerLinksIdStatsVisitsPathParams,
  GetApiCustomerLinksIdStatsVisitsQueryParams,
  GetApiCustomerLinksIdStatsVisitsQueryResponse,
} from "../../types/Customer.Link/GetApiCustomerLinksIdStatsVisits";

export const getApiCustomerLinksIdStatsVisitsSuspenseQueryKey = (
  id: GetApiCustomerLinksIdStatsVisitsPathParams["id"],
  params: GetApiCustomerLinksIdStatsVisitsQueryParams,
) => [{ url: "/api/customer/links/:id/stats/visits", params: { id: id } }, ...(params ? [params] : [])] as const;

export type GetApiCustomerLinksIdStatsVisitsSuspenseQueryKey = ReturnType<
  typeof getApiCustomerLinksIdStatsVisitsSuspenseQueryKey
>;

/**
 * @summary Получить статистику переходов по ссылке по id
 * {@link /api/customer/links/:id/stats/visits}
 */
export async function getApiCustomerLinksIdStatsVisitsSuspense(
  id: GetApiCustomerLinksIdStatsVisitsPathParams["id"],
  params: GetApiCustomerLinksIdStatsVisitsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const res = await request<
    GetApiCustomerLinksIdStatsVisitsQueryResponse,
    ResponseErrorConfig<
      GetApiCustomerLinksIdStatsVisits400 | GetApiCustomerLinksIdStatsVisits404 | GetApiCustomerLinksIdStatsVisits500
    >,
    unknown
  >({ method: "GET", url: `/api/customer/links/${id}/stats/visits`, params, ...requestConfig });
  return res.data;
}

export function getApiCustomerLinksIdStatsVisitsSuspenseQueryOptions(
  id: GetApiCustomerLinksIdStatsVisitsPathParams["id"],
  params: GetApiCustomerLinksIdStatsVisitsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksIdStatsVisitsSuspenseQueryKey(id, params);
  return queryOptions<
    GetApiCustomerLinksIdStatsVisitsQueryResponse,
    ResponseErrorConfig<
      GetApiCustomerLinksIdStatsVisits400 | GetApiCustomerLinksIdStatsVisits404 | GetApiCustomerLinksIdStatsVisits500
    >,
    GetApiCustomerLinksIdStatsVisitsQueryResponse,
    typeof queryKey
  >({
    enabled: !!(id && params),
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerLinksIdStatsVisitsSuspense(id, params, config);
    },
  });
}

/**
 * @summary Получить статистику переходов по ссылке по id
 * {@link /api/customer/links/:id/stats/visits}
 */
export function useGetApiCustomerLinksIdStatsVisitsSuspense<
  TData = GetApiCustomerLinksIdStatsVisitsQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksIdStatsVisitsSuspenseQueryKey,
>(
  id: GetApiCustomerLinksIdStatsVisitsPathParams["id"],
  params: GetApiCustomerLinksIdStatsVisitsQueryParams,
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetApiCustomerLinksIdStatsVisitsQueryResponse,
        ResponseErrorConfig<
          | GetApiCustomerLinksIdStatsVisits400
          | GetApiCustomerLinksIdStatsVisits404
          | GetApiCustomerLinksIdStatsVisits500
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
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksIdStatsVisitsSuspenseQueryKey(id, params);

  const query = useSuspenseQuery(
    {
      ...getApiCustomerLinksIdStatsVisitsSuspenseQueryOptions(id, params, config),
      queryKey,
      ...queryOptions,
    } as unknown as UseSuspenseQueryOptions,
    queryClient,
  ) as UseSuspenseQueryResult<
    TData,
    ResponseErrorConfig<
      GetApiCustomerLinksIdStatsVisits400 | GetApiCustomerLinksIdStatsVisits404 | GetApiCustomerLinksIdStatsVisits500
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
