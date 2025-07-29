import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksIdQueryResponse,
  GetApiCustomerLinksIdPathParams,
  GetApiCustomerLinksId400,
  GetApiCustomerLinksId404,
} from "../../types/Customer Link/GetApiCustomerLinksId";

export const getApiCustomerLinksIdSuspenseQueryKey = (id: GetApiCustomerLinksIdPathParams["id"]) =>
  [{ url: "/api/customer/links/:id", params: { id: id } }] as const;

export type GetApiCustomerLinksIdSuspenseQueryKey = ReturnType<typeof getApiCustomerLinksIdSuspenseQueryKey>;

/**
 * @summary Получить ссылку по id
 * {@link /api/customer/links/:id}
 */
export async function getApiCustomerLinksIdSuspense(
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

export function getApiCustomerLinksIdSuspenseQueryOptions(
  id: GetApiCustomerLinksIdPathParams["id"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksIdSuspenseQueryKey(id);
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
      return getApiCustomerLinksIdSuspense(id, config);
    },
  });
}

/**
 * @summary Получить ссылку по id
 * {@link /api/customer/links/:id}
 */
export function useGetApiCustomerLinksIdSuspense<
  TData = GetApiCustomerLinksIdQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksIdSuspenseQueryKey,
>(
  id: GetApiCustomerLinksIdPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetApiCustomerLinksIdQueryResponse,
        ResponseErrorConfig<GetApiCustomerLinksId400 | GetApiCustomerLinksId404>,
        TData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksIdSuspenseQueryKey(id);

  const query = useSuspenseQuery(
    {
      ...getApiCustomerLinksIdSuspenseQueryOptions(id, config),
      queryKey,
      ...queryOptions,
    } as unknown as UseSuspenseQueryOptions,
    queryClient,
  ) as UseSuspenseQueryResult<TData, ResponseErrorConfig<GetApiCustomerLinksId400 | GetApiCustomerLinksId404>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
