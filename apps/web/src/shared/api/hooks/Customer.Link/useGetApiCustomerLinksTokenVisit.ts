/* eslint-disable */
// @ts-nocheck
import type { QueryClient, QueryKey, QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import fetch from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksTokenVisit400,
  GetApiCustomerLinksTokenVisit404,
  GetApiCustomerLinksTokenVisit500,
  GetApiCustomerLinksTokenVisitPathParams,
  GetApiCustomerLinksTokenVisitQueryResponse,
} from "../../types/Customer.Link/GetApiCustomerLinksTokenVisit";

export const getApiCustomerLinksTokenVisitQueryKey = (token: GetApiCustomerLinksTokenVisitPathParams["token"]) =>
  [{ url: "/api/customer/links/:token/visit", params: { token: token } }] as const;

export type GetApiCustomerLinksTokenVisitQueryKey = ReturnType<typeof getApiCustomerLinksTokenVisitQueryKey>;

/**
 * @summary Перейти по ссылке по token
 * {@link /api/customer/links/:token/visit}
 */
export async function getApiCustomerLinksTokenVisit(
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

export function getApiCustomerLinksTokenVisitQueryOptions(
  token: GetApiCustomerLinksTokenVisitPathParams["token"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksTokenVisitQueryKey(token);
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
      return getApiCustomerLinksTokenVisit(token, config);
    },
  });
}

/**
 * @summary Перейти по ссылке по token
 * {@link /api/customer/links/:token/visit}
 */
export function useGetApiCustomerLinksTokenVisit<
  TData = GetApiCustomerLinksTokenVisitQueryResponse,
  TQueryData = GetApiCustomerLinksTokenVisitQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksTokenVisitQueryKey,
>(
  token: GetApiCustomerLinksTokenVisitPathParams["token"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetApiCustomerLinksTokenVisitQueryResponse,
        ResponseErrorConfig<
          GetApiCustomerLinksTokenVisit400 | GetApiCustomerLinksTokenVisit404 | GetApiCustomerLinksTokenVisit500
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
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksTokenVisitQueryKey(token);

  const query = useQuery(
    {
      ...getApiCustomerLinksTokenVisitQueryOptions(token, config),
      queryKey,
      ...queryOptions,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      GetApiCustomerLinksTokenVisit400 | GetApiCustomerLinksTokenVisit404 | GetApiCustomerLinksTokenVisit500
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
