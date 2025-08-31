import { RequestConfig, fetchClient } from "@/shared/lib/fetch-client";
import { QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";

interface QueryParams {
  limit?: number;
  offset?: number;
  sort_by?: string;
  desc?: string;
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
    query?: Partial<QueryObserverOptions<any>>;
    client?: Partial<RequestConfig> & { client?: typeof fetchClient };
  },
) => QueryResponse<TData>;

export { type ApiResponse, type QueryHook, type QueryParams, type QueryResponse };
