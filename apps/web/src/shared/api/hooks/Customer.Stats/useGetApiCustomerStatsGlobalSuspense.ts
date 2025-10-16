/* eslint-disable */
// @ts-nocheck
import type { QueryClient, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerStatsGlobal400,
  GetApiCustomerStatsGlobal500,
  GetApiCustomerStatsGlobalQueryResponse,
} from "../../types/Customer.Stats/GetApiCustomerStatsGlobal";

export const getApiCustomerStatsGlobalSuspenseQueryKey = () => [{ url: "/api/customer/stats/global" }] as const;

export type GetApiCustomerStatsGlobalSuspenseQueryKey = ReturnType<typeof getApiCustomerStatsGlobalSuspenseQueryKey>;

/**
 * @summary Получить глобальную статистику
 * {@link /api/customer/stats/global}
 */
export async function getApiCustomerStatsGlobalSuspense(
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const res = await request<
    GetApiCustomerStatsGlobalQueryResponse,
    ResponseErrorConfig<GetApiCustomerStatsGlobal400 | GetApiCustomerStatsGlobal500>,
    unknown
  >({ method: "GET", url: `/api/customer/stats/global`, ...requestConfig });
  return res.data;
}

export function getApiCustomerStatsGlobalSuspenseQueryOptions(
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerStatsGlobalSuspenseQueryKey();
  return queryOptions<
    GetApiCustomerStatsGlobalQueryResponse,
    ResponseErrorConfig<GetApiCustomerStatsGlobal400 | GetApiCustomerStatsGlobal500>,
    GetApiCustomerStatsGlobalQueryResponse,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerStatsGlobalSuspense(config);
    },
  });
}

/**
 * @summary Получить глобальную статистику
 * {@link /api/customer/stats/global}
 */
export function useGetApiCustomerStatsGlobalSuspense<
  TData = GetApiCustomerStatsGlobalQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerStatsGlobalSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetApiCustomerStatsGlobalQueryResponse,
        ResponseErrorConfig<GetApiCustomerStatsGlobal400 | GetApiCustomerStatsGlobal500>,
        TData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...queryOptions } = queryConfig;
  const queryKey = queryOptions?.queryKey ?? getApiCustomerStatsGlobalSuspenseQueryKey();

  const query = useSuspenseQuery(
    {
      ...getApiCustomerStatsGlobalSuspenseQueryOptions(config),
      queryKey,
      ...queryOptions,
    } as unknown as UseSuspenseQueryOptions,
    queryClient,
  ) as UseSuspenseQueryResult<
    TData,
    ResponseErrorConfig<GetApiCustomerStatsGlobal400 | GetApiCustomerStatsGlobal500>
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
