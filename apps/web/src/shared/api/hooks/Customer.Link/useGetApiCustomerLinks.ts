/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksQueryResponse,
  GetApiCustomerLinksQueryParams,
  GetApiCustomerLinks400,
  GetApiCustomerLinks500,
} from "../../types/Customer.Link/GetApiCustomerLinks";

export const getApiCustomerLinksQueryKey = (params?: GetApiCustomerLinksQueryParams) =>
  [{ url: "/api/customer/links" }, ...(params ? [params] : [])] as const;

export type GetApiCustomerLinksQueryKey = ReturnType<typeof getApiCustomerLinksQueryKey>;

/**
 * @summary Получить ссылки
 * {@link /api/customer/links}
 */
export async function getApiCustomerLinks(
  params?: GetApiCustomerLinksQueryParams,
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const res = await request<
    GetApiCustomerLinksQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinks400 | GetApiCustomerLinks500>,
    unknown
  >({
    method: "GET",
    url: `/api/customer/links`,
    params,
    ...requestConfig,
  });
  return res.data;
}

export function getApiCustomerLinksQueryOptions(
  params?: GetApiCustomerLinksQueryParams,
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksQueryKey(params);
  return queryOptions<
    GetApiCustomerLinksQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinks400 | GetApiCustomerLinks500>,
    GetApiCustomerLinksQueryResponse,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerLinks(params, config);
    },
  });
}

/**
 * @summary Получить ссылки
 * {@link /api/customer/links}
 */
export function useGetApiCustomerLinks<
  TData = GetApiCustomerLinksQueryResponse,
  TQueryData = GetApiCustomerLinksQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksQueryKey,
>(
  params?: GetApiCustomerLinksQueryParams,
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetApiCustomerLinksQueryResponse,
        ResponseErrorConfig<GetApiCustomerLinks400 | GetApiCustomerLinks500>,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksQueryKey(params);

  const query = useQuery(
    {
      ...getApiCustomerLinksQueryOptions(params, config),
      queryKey,
      ...queryOptions,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<GetApiCustomerLinks400 | GetApiCustomerLinks500>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
