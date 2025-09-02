/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksTokenVisitQueryResponse,
  GetApiCustomerLinksTokenVisitPathParams,
  GetApiCustomerLinksTokenVisit400,
  GetApiCustomerLinksTokenVisit404,
  GetApiCustomerLinksTokenVisit500,
} from "../../types/Customer.Link/GetApiCustomerLinksTokenVisit";

export const getApiCustomerLinksTokenVisitQueryKey = (token: GetApiCustomerLinksTokenVisitPathParams["token"]) =>
  [{ url: "/api/customer/links/:token/visit", params: { token: token } }] as const;

export type GetApiCustomerLinksTokenVisitQueryKey = ReturnType<typeof getApiCustomerLinksTokenVisitQueryKey>;

/**
 * @summary Посетить ссылку по token
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
 * @summary Посетить ссылку по token
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
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {};
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
  > & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
