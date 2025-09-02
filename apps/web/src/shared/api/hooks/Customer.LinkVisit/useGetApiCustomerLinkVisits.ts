/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinkVisitsQueryResponse,
  GetApiCustomerLinkVisitsQueryParams,
  GetApiCustomerLinkVisits400,
  GetApiCustomerLinkVisits500,
} from "../../types/Customer.LinkVisit/GetApiCustomerLinkVisits";

export const getApiCustomerLinkVisitsQueryKey = (params?: GetApiCustomerLinkVisitsQueryParams) =>
  [{ url: "/api/customer/link-visits" }, ...(params ? [params] : [])] as const;

export type GetApiCustomerLinkVisitsQueryKey = ReturnType<typeof getApiCustomerLinkVisitsQueryKey>;

/**
 * @summary Получить посещения ссылок
 * {@link /api/customer/link-visits}
 */
export async function getApiCustomerLinkVisits(
  params?: GetApiCustomerLinkVisitsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const res = await request<
    GetApiCustomerLinkVisitsQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinkVisits400 | GetApiCustomerLinkVisits500>,
    unknown
  >({
    method: "GET",
    url: `/api/customer/link-visits`,
    params,
    ...requestConfig,
  });
  return res.data;
}

export function getApiCustomerLinkVisitsQueryOptions(
  params?: GetApiCustomerLinkVisitsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinkVisitsQueryKey(params);
  return queryOptions<
    GetApiCustomerLinkVisitsQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinkVisits400 | GetApiCustomerLinkVisits500>,
    GetApiCustomerLinkVisitsQueryResponse,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerLinkVisits(params, config);
    },
  });
}

/**
 * @summary Получить посещения ссылок
 * {@link /api/customer/link-visits}
 */
export function useGetApiCustomerLinkVisits<
  TData = GetApiCustomerLinkVisitsQueryResponse,
  TQueryData = GetApiCustomerLinkVisitsQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinkVisitsQueryKey,
>(
  params?: GetApiCustomerLinkVisitsQueryParams,
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetApiCustomerLinkVisitsQueryResponse,
        ResponseErrorConfig<GetApiCustomerLinkVisits400 | GetApiCustomerLinkVisits500>,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinkVisitsQueryKey(params);

  const query = useQuery(
    {
      ...getApiCustomerLinkVisitsQueryOptions(params, config),
      queryKey,
      ...queryOptions,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<GetApiCustomerLinkVisits400 | GetApiCustomerLinkVisits500>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
