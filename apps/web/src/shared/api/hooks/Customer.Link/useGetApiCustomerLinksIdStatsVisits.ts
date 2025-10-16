/* eslint-disable */
// @ts-nocheck
import type { QueryClient, QueryKey, QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

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

export const getApiCustomerLinksIdStatsVisitsQueryKey = (
  id: GetApiCustomerLinksIdStatsVisitsPathParams["id"],
  params: GetApiCustomerLinksIdStatsVisitsQueryParams,
) => [{ url: "/api/customer/links/:id/stats/visits", params: { id: id } }, ...(params ? [params] : [])] as const;

export type GetApiCustomerLinksIdStatsVisitsQueryKey = ReturnType<typeof getApiCustomerLinksIdStatsVisitsQueryKey>;

/**
 * @summary Получить статистику переходов по ссылке по id
 * {@link /api/customer/links/:id/stats/visits}
 */
export async function getApiCustomerLinksIdStatsVisits(
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

export function getApiCustomerLinksIdStatsVisitsQueryOptions(
  id: GetApiCustomerLinksIdStatsVisitsPathParams["id"],
  params: GetApiCustomerLinksIdStatsVisitsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksIdStatsVisitsQueryKey(id, params);
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
      return getApiCustomerLinksIdStatsVisits(id, params, config);
    },
  });
}

/**
 * @summary Получить статистику переходов по ссылке по id
 * {@link /api/customer/links/:id/stats/visits}
 */
export function useGetApiCustomerLinksIdStatsVisits<
  TData = GetApiCustomerLinksIdStatsVisitsQueryResponse,
  TQueryData = GetApiCustomerLinksIdStatsVisitsQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksIdStatsVisitsQueryKey,
>(
  id: GetApiCustomerLinksIdStatsVisitsPathParams["id"],
  params: GetApiCustomerLinksIdStatsVisitsQueryParams,
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetApiCustomerLinksIdStatsVisitsQueryResponse,
        ResponseErrorConfig<
          | GetApiCustomerLinksIdStatsVisits400
          | GetApiCustomerLinksIdStatsVisits404
          | GetApiCustomerLinksIdStatsVisits500
        >,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...queryOptions } = queryConfig;
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksIdStatsVisitsQueryKey(id, params);

  const query = useQuery(
    {
      ...getApiCustomerLinksIdStatsVisitsQueryOptions(id, params, config),
      queryKey,
      ...queryOptions,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      GetApiCustomerLinksIdStatsVisits400 | GetApiCustomerLinksIdStatsVisits404 | GetApiCustomerLinksIdStatsVisits500
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
