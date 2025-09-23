/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinkVisitsQueryResponse,
  GetApiCustomerLinkVisitsQueryParams,
  GetApiCustomerLinkVisits400,
  GetApiCustomerLinkVisits500,
} from "../../types/Customer.LinkVisit/GetApiCustomerLinkVisits";

export const getApiCustomerLinkVisitsSuspenseQueryKey = (params?: GetApiCustomerLinkVisitsQueryParams) =>
  [{ url: "/api/customer/link-visits" }, ...(params ? [params] : [])] as const;

export type GetApiCustomerLinkVisitsSuspenseQueryKey = ReturnType<typeof getApiCustomerLinkVisitsSuspenseQueryKey>;

/**
 * @summary Получить переходы по ссылкам
 * {@link /api/customer/link-visits}
 */
export async function getApiCustomerLinkVisitsSuspense(
  params?: GetApiCustomerLinkVisitsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const res = await request<
    GetApiCustomerLinkVisitsQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinkVisits400 | GetApiCustomerLinkVisits500>,
    unknown
  >({ method: "GET", url: `/api/customer/link-visits`, params, ...requestConfig });
  return res.data;
}

export function getApiCustomerLinkVisitsSuspenseQueryOptions(
  params?: GetApiCustomerLinkVisitsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinkVisitsSuspenseQueryKey(params);
  return queryOptions<
    GetApiCustomerLinkVisitsQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinkVisits400 | GetApiCustomerLinkVisits500>,
    GetApiCustomerLinkVisitsQueryResponse,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerLinkVisitsSuspense(params, config);
    },
  });
}

/**
 * @summary Получить переходы по ссылкам
 * {@link /api/customer/link-visits}
 */
export function useGetApiCustomerLinkVisitsSuspense<
  TData = GetApiCustomerLinkVisitsQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinkVisitsSuspenseQueryKey,
>(
  params?: GetApiCustomerLinkVisitsQueryParams,
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetApiCustomerLinkVisitsQueryResponse,
        ResponseErrorConfig<GetApiCustomerLinkVisits400 | GetApiCustomerLinkVisits500>,
        TData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...queryOptions } = queryConfig;
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinkVisitsSuspenseQueryKey(params);

  const query = useSuspenseQuery(
    {
      ...getApiCustomerLinkVisitsSuspenseQueryOptions(params, config),
      queryKey,
      ...queryOptions,
    } as unknown as UseSuspenseQueryOptions,
    queryClient,
  ) as UseSuspenseQueryResult<TData, ResponseErrorConfig<GetApiCustomerLinkVisits400 | GetApiCustomerLinkVisits500>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
