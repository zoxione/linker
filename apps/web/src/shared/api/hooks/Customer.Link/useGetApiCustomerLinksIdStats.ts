/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksIdStatsQueryResponse,
  GetApiCustomerLinksIdStatsQueryParams,
  GetApiCustomerLinksIdStats400,
  GetApiCustomerLinksIdStats404,
} from "../../types/Customer.Link/GetApiCustomerLinksIdStats";

export const getApiCustomerLinksIdStatsQueryKey = (params: GetApiCustomerLinksIdStatsQueryParams) =>
  [{ url: "/api/customer/links/:id/stats", params: { id: id } }, ...(params ? [params] : [])] as const;

export type GetApiCustomerLinksIdStatsQueryKey = ReturnType<typeof getApiCustomerLinksIdStatsQueryKey>;

/**
 * @summary Получить статистику ссылки
 * {@link /api/customer/links/:id/stats}
 */
export async function getApiCustomerLinksIdStats(
  params: GetApiCustomerLinksIdStatsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const res = await request<
    GetApiCustomerLinksIdStatsQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinksIdStats400 | GetApiCustomerLinksIdStats404>,
    unknown
  >({ method: "GET", url: `/api/customer/links/${id}/stats`, params, ...requestConfig });
  return res.data;
}

export function getApiCustomerLinksIdStatsQueryOptions(
  params: GetApiCustomerLinksIdStatsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksIdStatsQueryKey(params);
  return queryOptions<
    GetApiCustomerLinksIdStatsQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinksIdStats400 | GetApiCustomerLinksIdStats404>,
    GetApiCustomerLinksIdStatsQueryResponse,
    typeof queryKey
  >({
    enabled: !!params,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerLinksIdStats(params, config);
    },
  });
}

/**
 * @summary Получить статистику ссылки
 * {@link /api/customer/links/:id/stats}
 */
export function useGetApiCustomerLinksIdStats<
  TData = GetApiCustomerLinksIdStatsQueryResponse,
  TQueryData = GetApiCustomerLinksIdStatsQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksIdStatsQueryKey,
>(
  params: GetApiCustomerLinksIdStatsQueryParams,
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetApiCustomerLinksIdStatsQueryResponse,
        ResponseErrorConfig<GetApiCustomerLinksIdStats400 | GetApiCustomerLinksIdStats404>,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksIdStatsQueryKey(params);

  const query = useQuery(
    {
      ...getApiCustomerLinksIdStatsQueryOptions(params, config),
      queryKey,
      ...queryOptions,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<GetApiCustomerLinksIdStats400 | GetApiCustomerLinksIdStats404>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
