/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksIdStatsQueryResponse,
  GetApiCustomerLinksIdStatsPathParams,
  GetApiCustomerLinksIdStatsQueryParams,
  GetApiCustomerLinksIdStats400,
  GetApiCustomerLinksIdStats404,
} from "../../types/Customer.Link/GetApiCustomerLinksIdStats";

export const getApiCustomerLinksIdStatsSuspenseQueryKey = (
  id: GetApiCustomerLinksIdStatsPathParams["id"],
  params: GetApiCustomerLinksIdStatsQueryParams,
) => [{ url: "/api/customer/links/:id/stats", params: { id: id } }, ...(params ? [params] : [])] as const;

export type GetApiCustomerLinksIdStatsSuspenseQueryKey = ReturnType<typeof getApiCustomerLinksIdStatsSuspenseQueryKey>;

/**
 * @summary Получить статистику ссылки
 * {@link /api/customer/links/:id/stats}
 */
export async function getApiCustomerLinksIdStatsSuspense(
  id: GetApiCustomerLinksIdStatsPathParams["id"],
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

export function getApiCustomerLinksIdStatsSuspenseQueryOptions(
  id: GetApiCustomerLinksIdStatsPathParams["id"],
  params: GetApiCustomerLinksIdStatsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksIdStatsSuspenseQueryKey(id, params);
  return queryOptions<
    GetApiCustomerLinksIdStatsQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinksIdStats400 | GetApiCustomerLinksIdStats404>,
    GetApiCustomerLinksIdStatsQueryResponse,
    typeof queryKey
  >({
    enabled: !!(id && params),
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerLinksIdStatsSuspense(id, params, config);
    },
  });
}

/**
 * @summary Получить статистику ссылки
 * {@link /api/customer/links/:id/stats}
 */
export function useGetApiCustomerLinksIdStatsSuspense<
  TData = GetApiCustomerLinksIdStatsQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksIdStatsSuspenseQueryKey,
>(
  id: GetApiCustomerLinksIdStatsPathParams["id"],
  params: GetApiCustomerLinksIdStatsQueryParams,
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetApiCustomerLinksIdStatsQueryResponse,
        ResponseErrorConfig<GetApiCustomerLinksIdStats400 | GetApiCustomerLinksIdStats404>,
        TData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksIdStatsSuspenseQueryKey(id, params);

  const query = useSuspenseQuery(
    {
      ...getApiCustomerLinksIdStatsSuspenseQueryOptions(id, params, config),
      queryKey,
      ...queryOptions,
    } as unknown as UseSuspenseQueryOptions,
    queryClient,
  ) as UseSuspenseQueryResult<
    TData,
    ResponseErrorConfig<GetApiCustomerLinksIdStats400 | GetApiCustomerLinksIdStats404>
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
