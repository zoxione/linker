/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksQueryResponse,
  GetApiCustomerLinksQueryParams,
  GetApiCustomerLinks400,
  GetApiCustomerLinks500,
} from "../../types/Customer.Link/GetApiCustomerLinks";

export const getApiCustomerLinksSuspenseQueryKey = (params?: GetApiCustomerLinksQueryParams) =>
  [{ url: "/api/customer/links" }, ...(params ? [params] : [])] as const;

export type GetApiCustomerLinksSuspenseQueryKey = ReturnType<typeof getApiCustomerLinksSuspenseQueryKey>;

/**
 * @summary Получить ссылки
 * {@link /api/customer/links}
 */
export async function getApiCustomerLinksSuspense(
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

export function getApiCustomerLinksSuspenseQueryOptions(
  params?: GetApiCustomerLinksQueryParams,
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksSuspenseQueryKey(params);
  return queryOptions<
    GetApiCustomerLinksQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinks400 | GetApiCustomerLinks500>,
    GetApiCustomerLinksQueryResponse,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerLinksSuspense(params, config);
    },
  });
}

/**
 * @summary Получить ссылки
 * {@link /api/customer/links}
 */
export function useGetApiCustomerLinksSuspense<
  TData = GetApiCustomerLinksQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksSuspenseQueryKey,
>(
  params?: GetApiCustomerLinksQueryParams,
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetApiCustomerLinksQueryResponse,
        ResponseErrorConfig<GetApiCustomerLinks400 | GetApiCustomerLinks500>,
        TData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksSuspenseQueryKey(params);

  const query = useSuspenseQuery(
    {
      ...getApiCustomerLinksSuspenseQueryOptions(params, config),
      queryKey,
      ...queryOptions,
    } as unknown as UseSuspenseQueryOptions,
    queryClient,
  ) as UseSuspenseQueryResult<TData, ResponseErrorConfig<GetApiCustomerLinks400 | GetApiCustomerLinks500>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
