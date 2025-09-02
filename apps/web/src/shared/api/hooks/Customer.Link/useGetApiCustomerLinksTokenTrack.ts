/* eslint-disable */
// @ts-nocheck
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  GetApiCustomerLinksTokenTrackQueryResponse,
  GetApiCustomerLinksTokenTrackPathParams,
  GetApiCustomerLinksTokenTrack400,
  GetApiCustomerLinksTokenTrack404,
} from "../../types/Customer.Link/GetApiCustomerLinksTokenTrack";

export const getApiCustomerLinksTokenTrackQueryKey = (token: GetApiCustomerLinksTokenTrackPathParams["token"]) =>
  [{ url: "/api/customer/links/:token/track", params: { token: token } }] as const;

export type GetApiCustomerLinksTokenTrackQueryKey = ReturnType<typeof getApiCustomerLinksTokenTrackQueryKey>;

/**
 * @summary Отследить переход по ссылке по token
 * {@link /api/customer/links/:token/track}
 */
export async function getApiCustomerLinksTokenTrack(
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

export function getApiCustomerLinksTokenTrackQueryOptions(
  token: GetApiCustomerLinksTokenTrackPathParams["token"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const queryKey = getApiCustomerLinksTokenTrackQueryKey(token);
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
      return getApiCustomerLinksTokenTrack(token, config);
    },
  });
}

/**
 * @summary Отследить переход по ссылке по token
 * {@link /api/customer/links/:token/track}
 */
export function useGetApiCustomerLinksTokenTrack<
  TData = GetApiCustomerLinksTokenTrackQueryResponse,
  TQueryData = GetApiCustomerLinksTokenTrackQueryResponse,
  TQueryKey extends QueryKey = GetApiCustomerLinksTokenTrackQueryKey,
>(
  token: GetApiCustomerLinksTokenTrackPathParams["token"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetApiCustomerLinksTokenTrackQueryResponse,
        ResponseErrorConfig<GetApiCustomerLinksTokenTrack400 | GetApiCustomerLinksTokenTrack404>,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getApiCustomerLinksTokenTrackQueryKey(token);

  const query = useQuery(
    {
      ...getApiCustomerLinksTokenTrackQueryOptions(token, config),
      queryKey,
      ...queryOptions,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<GetApiCustomerLinksTokenTrack400 | GetApiCustomerLinksTokenTrack404>
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
