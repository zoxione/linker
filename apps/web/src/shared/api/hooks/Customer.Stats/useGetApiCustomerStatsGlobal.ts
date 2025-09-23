/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerStatsGlobalQueryResponse,
  GetApiCustomerStatsGlobal400,
  GetApiCustomerStatsGlobal500,
} from "../../types/Customer.Stats/GetApiCustomerStatsGlobal";

export const getApiCustomerStatsGlobalQueryKey = () => [{ url: "/api/customer/stats/global" }] as const;

export type GetApiCustomerStatsGlobalQueryKey = ReturnType<typeof getApiCustomerStatsGlobalQueryKey>;

/**
 * @summary Получить глобальную статистику
 * {@link /api/customer/stats/global}
 */
export async function getApiCustomerStatsGlobal(config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config;

  const res = await request<
    GetApiCustomerStatsGlobalQueryResponse,
    ResponseErrorConfig<GetApiCustomerStatsGlobal400 | GetApiCustomerStatsGlobal500>,
    unknown
  >({ method: "GET", url: `/api/customer/stats/global`, ...requestConfig });
  return res.data;
}

export function getApiCustomerStatsGlobalQueryOptions(config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const queryKey = getApiCustomerStatsGlobalQueryKey();
  return queryOptions<
    GetApiCustomerStatsGlobalQueryResponse,
    ResponseErrorConfig<GetApiCustomerStatsGlobal400 | GetApiCustomerStatsGlobal500>,
    GetApiCustomerStatsGlobalQueryResponse,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerStatsGlobal(config);
    },
  });
}

/**
 * @summary Получить глобальную статистику
 * {@link /api/customer/stats/global}
 */
export function useGetApiCustomerStatsGlobal<
  TData = GetApiCustomerStatsGlobalQueryResponse,
  TQueryData = GetApiCustomerStatsGlobalQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerStatsGlobalQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetApiCustomerStatsGlobalQueryResponse,
        ResponseErrorConfig<GetApiCustomerStatsGlobal400 | GetApiCustomerStatsGlobal500>,
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
  const queryKey = queryOptions?.queryKey ?? getApiCustomerStatsGlobalQueryKey();

  const query = useQuery(
    {
      ...getApiCustomerStatsGlobalQueryOptions(config),
      queryKey,
      ...queryOptions,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<GetApiCustomerStatsGlobal400 | GetApiCustomerStatsGlobal500>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
