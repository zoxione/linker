/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksIdQueryResponse,
  GetApiCustomerLinksIdPathParams,
  GetApiCustomerLinksId400,
  GetApiCustomerLinksId404,
} from "../../types/Customer.Link/GetApiCustomerLinksId";

export const getApiCustomerLinksIdQueryKey = (id: GetApiCustomerLinksIdPathParams["id"]) =>
  [{ url: "/api/customer/links/:id", params: { id: id } }] as const;

export type GetApiCustomerLinksIdQueryKey = ReturnType<typeof getApiCustomerLinksIdQueryKey>;

/**
 * @summary Получить ссылку по id
 * {@link /api/customer/links/:id}
 */
export async function getApiCustomerLinksId(
  id: GetApiCustomerLinksIdPathParams["id"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const res = await request<
    GetApiCustomerLinksIdQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinksId400 | GetApiCustomerLinksId404>,
    unknown
  >({
    method: "GET",
    url: `/api/customer/links/${id}`,
    ...requestConfig,
  });
  return res.data;
}

export function getApiCustomerLinksIdQueryOptions(
  id: GetApiCustomerLinksIdPathParams["id"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksIdQueryKey(id);
  return queryOptions<
    GetApiCustomerLinksIdQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinksId400 | GetApiCustomerLinksId404>,
    GetApiCustomerLinksIdQueryResponse,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerLinksId(id, config);
    },
  });
}

/**
 * @summary Получить ссылку по id
 * {@link /api/customer/links/:id}
 */
export function useGetApiCustomerLinksId<
  TData = GetApiCustomerLinksIdQueryResponse,
  TQueryData = GetApiCustomerLinksIdQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksIdQueryKey,
>(
  id: GetApiCustomerLinksIdPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetApiCustomerLinksIdQueryResponse,
        ResponseErrorConfig<GetApiCustomerLinksId400 | GetApiCustomerLinksId404>,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksIdQueryKey(id);

  const query = useQuery(
    {
      ...getApiCustomerLinksIdQueryOptions(id, config),
      queryKey,
      ...queryOptions,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<GetApiCustomerLinksId400 | GetApiCustomerLinksId404>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
