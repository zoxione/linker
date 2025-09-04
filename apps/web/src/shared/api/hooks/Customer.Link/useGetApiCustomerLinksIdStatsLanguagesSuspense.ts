/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksIdStatsLanguagesQueryResponse,
  GetApiCustomerLinksIdStatsLanguagesPathParams,
  GetApiCustomerLinksIdStatsLanguages400,
  GetApiCustomerLinksIdStatsLanguages404,
  GetApiCustomerLinksIdStatsLanguages500,
} from "../../types/Customer.Link/GetApiCustomerLinksIdStatsLanguages";

export const getApiCustomerLinksIdStatsLanguagesSuspenseQueryKey = (
  id: GetApiCustomerLinksIdStatsLanguagesPathParams["id"],
) => [{ url: "/api/customer/links/:id/stats/languages", params: { id: id } }] as const;

export type GetApiCustomerLinksIdStatsLanguagesSuspenseQueryKey = ReturnType<
  typeof getApiCustomerLinksIdStatsLanguagesSuspenseQueryKey
>;

/**
 * @summary Получить статистику языков ссылки по id
 * {@link /api/customer/links/:id/stats/languages}
 */
export async function getApiCustomerLinksIdStatsLanguagesSuspense(
  id: GetApiCustomerLinksIdStatsLanguagesPathParams["id"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const res = await request<
    GetApiCustomerLinksIdStatsLanguagesQueryResponse,
    ResponseErrorConfig<
      | GetApiCustomerLinksIdStatsLanguages400
      | GetApiCustomerLinksIdStatsLanguages404
      | GetApiCustomerLinksIdStatsLanguages500
    >,
    unknown
  >({ method: "GET", url: `/api/customer/links/${id}/stats/languages`, ...requestConfig });
  return res.data;
}

export function getApiCustomerLinksIdStatsLanguagesSuspenseQueryOptions(
  id: GetApiCustomerLinksIdStatsLanguagesPathParams["id"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksIdStatsLanguagesSuspenseQueryKey(id);
  return queryOptions<
    GetApiCustomerLinksIdStatsLanguagesQueryResponse,
    ResponseErrorConfig<
      | GetApiCustomerLinksIdStatsLanguages400
      | GetApiCustomerLinksIdStatsLanguages404
      | GetApiCustomerLinksIdStatsLanguages500
    >,
    GetApiCustomerLinksIdStatsLanguagesQueryResponse,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerLinksIdStatsLanguagesSuspense(id, config);
    },
  });
}

/**
 * @summary Получить статистику языков ссылки по id
 * {@link /api/customer/links/:id/stats/languages}
 */
export function useGetApiCustomerLinksIdStatsLanguagesSuspense<
  TData = GetApiCustomerLinksIdStatsLanguagesQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksIdStatsLanguagesSuspenseQueryKey,
>(
  id: GetApiCustomerLinksIdStatsLanguagesPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetApiCustomerLinksIdStatsLanguagesQueryResponse,
        ResponseErrorConfig<
          | GetApiCustomerLinksIdStatsLanguages400
          | GetApiCustomerLinksIdStatsLanguages404
          | GetApiCustomerLinksIdStatsLanguages500
        >,
        TData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksIdStatsLanguagesSuspenseQueryKey(id);

  const query = useSuspenseQuery(
    {
      ...getApiCustomerLinksIdStatsLanguagesSuspenseQueryOptions(id, config),
      queryKey,
      ...queryOptions,
    } as unknown as UseSuspenseQueryOptions,
    queryClient,
  ) as UseSuspenseQueryResult<
    TData,
    ResponseErrorConfig<
      | GetApiCustomerLinksIdStatsLanguages400
      | GetApiCustomerLinksIdStatsLanguages404
      | GetApiCustomerLinksIdStatsLanguages500
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
