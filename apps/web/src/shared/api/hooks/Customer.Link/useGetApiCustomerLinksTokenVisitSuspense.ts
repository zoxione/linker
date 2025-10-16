/* eslint-disable */
// @ts-nocheck
import type { QueryClient, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksTokenVisit400,
  GetApiCustomerLinksTokenVisit404,
  GetApiCustomerLinksTokenVisit500,
  GetApiCustomerLinksTokenVisitPathParams,
  GetApiCustomerLinksTokenVisitQueryResponse,
} from "../../types/Customer.Link/GetApiCustomerLinksTokenVisit";

export const getApiCustomerLinksTokenVisitSuspenseQueryKey = (
  token: GetApiCustomerLinksTokenVisitPathParams["token"],
) => [{ url: "/api/customer/links/:token/visit", params: { token: token } }] as const;

export type GetApiCustomerLinksTokenVisitSuspenseQueryKey = ReturnType<
  typeof getApiCustomerLinksTokenVisitSuspenseQueryKey
>;

/**
 * @summary Перейти по ссылке по token
 * {@link /api/customer/links/:token/visit}
 */
export async function getApiCustomerLinksTokenVisitSuspense(
  token: GetApiCustomerLinksTokenVisitPathParams["token"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const res = await request<
    GetApiCustomerLinksTokenVisitQueryResponse,
    ResponseErrorConfig<
      GetApiCustomerLinksTokenVisit400 | GetApiCustomerLinksTokenVisit404 | GetApiCustomerLinksTokenVisit500
    >,
    unknown
  >({ method: "GET", url: `/api/customer/links/${token}/visit`, ...requestConfig });
  return res.data;
}

export function getApiCustomerLinksTokenVisitSuspenseQueryOptions(
  token: GetApiCustomerLinksTokenVisitPathParams["token"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksTokenVisitSuspenseQueryKey(token);
  return queryOptions<
    GetApiCustomerLinksTokenVisitQueryResponse,
    ResponseErrorConfig<
      GetApiCustomerLinksTokenVisit400 | GetApiCustomerLinksTokenVisit404 | GetApiCustomerLinksTokenVisit500
    >,
    GetApiCustomerLinksTokenVisitQueryResponse,
    typeof queryKey
  >({
    enabled: !!token,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerLinksTokenVisitSuspense(token, config);
    },
  });
}

/**
 * @summary Перейти по ссылке по token
 * {@link /api/customer/links/:token/visit}
 */
export function useGetApiCustomerLinksTokenVisitSuspense<
  TData = GetApiCustomerLinksTokenVisitQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksTokenVisitSuspenseQueryKey,
>(
  token: GetApiCustomerLinksTokenVisitPathParams["token"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetApiCustomerLinksTokenVisitQueryResponse,
        ResponseErrorConfig<
          GetApiCustomerLinksTokenVisit400 | GetApiCustomerLinksTokenVisit404 | GetApiCustomerLinksTokenVisit500
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
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksTokenVisitSuspenseQueryKey(token);

  const query = useSuspenseQuery(
    {
      ...getApiCustomerLinksTokenVisitSuspenseQueryOptions(token, config),
      queryKey,
      ...queryOptions,
    } as unknown as UseSuspenseQueryOptions,
    queryClient,
  ) as UseSuspenseQueryResult<
    TData,
    ResponseErrorConfig<
      GetApiCustomerLinksTokenVisit400 | GetApiCustomerLinksTokenVisit404 | GetApiCustomerLinksTokenVisit500
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
