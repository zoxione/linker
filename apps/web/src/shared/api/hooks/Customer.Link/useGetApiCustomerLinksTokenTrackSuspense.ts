/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksTokenTrackQueryResponse,
  GetApiCustomerLinksTokenTrackPathParams,
  GetApiCustomerLinksTokenTrack400,
  GetApiCustomerLinksTokenTrack404,
} from "../../types/Customer.Link/GetApiCustomerLinksTokenTrack";

export const getApiCustomerLinksTokenTrackSuspenseQueryKey = (
  token: GetApiCustomerLinksTokenTrackPathParams["token"],
) => [{ url: "/api/customer/links/:token/track", params: { token: token } }] as const;

export type GetApiCustomerLinksTokenTrackSuspenseQueryKey = ReturnType<
  typeof getApiCustomerLinksTokenTrackSuspenseQueryKey
>;

/**
 * @summary Отследить переход по ссылке по token
 * {@link /api/customer/links/:token/track}
 */
export async function getApiCustomerLinksTokenTrackSuspense(
  token: GetApiCustomerLinksTokenTrackPathParams["token"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const res = await request<
    GetApiCustomerLinksTokenTrackQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinksTokenTrack400 | GetApiCustomerLinksTokenTrack404>,
    unknown
  >({ method: "GET", url: `/api/customer/links/${token}/track`, ...requestConfig });
  return res.data;
}

export function getApiCustomerLinksTokenTrackSuspenseQueryOptions(
  token: GetApiCustomerLinksTokenTrackPathParams["token"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksTokenTrackSuspenseQueryKey(token);
  return queryOptions<
    GetApiCustomerLinksTokenTrackQueryResponse,
    ResponseErrorConfig<GetApiCustomerLinksTokenTrack400 | GetApiCustomerLinksTokenTrack404>,
    GetApiCustomerLinksTokenTrackQueryResponse,
    typeof queryKey
  >({
    enabled: !!token,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getApiCustomerLinksTokenTrackSuspense(token, config);
    },
  });
}

/**
 * @summary Отследить переход по ссылке по token
 * {@link /api/customer/links/:token/track}
 */
export function useGetApiCustomerLinksTokenTrackSuspense<
  TData = GetApiCustomerLinksTokenTrackQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksTokenTrackSuspenseQueryKey,
>(
  token: GetApiCustomerLinksTokenTrackPathParams["token"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetApiCustomerLinksTokenTrackQueryResponse,
        ResponseErrorConfig<GetApiCustomerLinksTokenTrack400 | GetApiCustomerLinksTokenTrack404>,
        TData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksTokenTrackSuspenseQueryKey(token);

  const query = useSuspenseQuery(
    {
      ...getApiCustomerLinksTokenTrackSuspenseQueryOptions(token, config),
      queryKey,
      ...queryOptions,
    } as unknown as UseSuspenseQueryOptions,
    queryClient,
  ) as UseSuspenseQueryResult<
    TData,
    ResponseErrorConfig<GetApiCustomerLinksTokenTrack400 | GetApiCustomerLinksTokenTrack404>
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
