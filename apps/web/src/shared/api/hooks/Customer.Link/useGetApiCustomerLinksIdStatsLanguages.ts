/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksIdStatsLanguagesQueryResponse,
  GetApiCustomerLinksIdStatsLanguagesPathParams,
  GetApiCustomerLinksIdStatsLanguages400,
  GetApiCustomerLinksIdStatsLanguages404,
  GetApiCustomerLinksIdStatsLanguages500,
} from "../../types/Customer.Link/GetApiCustomerLinksIdStatsLanguages";

export const getApiCustomerLinksIdStatsLanguagesQueryKey = (id: GetApiCustomerLinksIdStatsLanguagesPathParams["id"]) =>
  [{ url: "/api/customer/links/:id/stats/languages", params: { id: id } }] as const;

export type GetApiCustomerLinksIdStatsLanguagesQueryKey = ReturnType<
  typeof getApiCustomerLinksIdStatsLanguagesQueryKey
>;

/**
 * @summary Получить статистику языков ссылки по id
 * {@link /api/customer/links/:id/stats/languages}
 */
export async function getApiCustomerLinksIdStatsLanguages(
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

export function getApiCustomerLinksIdStatsLanguagesQueryOptions(
  id: GetApiCustomerLinksIdStatsLanguagesPathParams["id"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksIdStatsLanguagesQueryKey(id);
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
      return getApiCustomerLinksIdStatsLanguages(id, config);
    },
  });
}

/**
 * @summary Получить статистику языков ссылки по id
 * {@link /api/customer/links/:id/stats/languages}
 */
export function useGetApiCustomerLinksIdStatsLanguages<
  TData = GetApiCustomerLinksIdStatsLanguagesQueryResponse,
  TQueryData = GetApiCustomerLinksIdStatsLanguagesQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksIdStatsLanguagesQueryKey,
>(
  id: GetApiCustomerLinksIdStatsLanguagesPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetApiCustomerLinksIdStatsLanguagesQueryResponse,
        ResponseErrorConfig<
          | GetApiCustomerLinksIdStatsLanguages400
          | GetApiCustomerLinksIdStatsLanguages404
          | GetApiCustomerLinksIdStatsLanguages500
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
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksIdStatsLanguagesQueryKey(id);

  const query = useQuery(
    {
      ...getApiCustomerLinksIdStatsLanguagesQueryOptions(id, config),
      queryKey,
      ...queryOptions,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
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
