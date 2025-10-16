import { QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";

import { RequestConfig, fetchClient } from "@/shared/lib/fetch-client";

interface QueryParams {
  limit?: number;
  offset?: number;
  sortBy?: string;
  sortOrder?: string;
}

interface ApiResponse<TData> {
  limit: number;
  offset: number;
  count: number;
  total: number;
  items: TData[];
}

type QueryResponse<TData> = UseQueryResult<ApiResponse<TData> | undefined>;

type QueryHook<TData> = (
  params: QueryParams,
  options: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    query?: Partial<QueryObserverOptions<any>>;
    client?: Partial<RequestConfig> & { client?: typeof fetchClient };
  },
) => QueryResponse<TData>;

export { type ApiResponse, type QueryHook, type QueryParams, type QueryResponse };
