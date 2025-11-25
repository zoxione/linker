/* eslint-disable */
// @ts-nocheck
import type { QueryClient, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { mutationOptions, useMutation } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  PostApiCustomerLinksIdStatus400,
  PostApiCustomerLinksIdStatus404,
  PostApiCustomerLinksIdStatus500,
  PostApiCustomerLinksIdStatusMutationRequest,
  PostApiCustomerLinksIdStatusMutationResponse,
  PostApiCustomerLinksIdStatusPathParams,
} from "../../types/Customer.Link/PostApiCustomerLinksIdStatus";

export const postApiCustomerLinksIdStatusMutationKey = () => [{ url: "/api/customer/links/:id/status" }] as const;

export type PostApiCustomerLinksIdStatusMutationKey = ReturnType<typeof postApiCustomerLinksIdStatusMutationKey>;

/**
 * @summary Обновить статус ссылки по id
 * {@link /api/customer/links/:id/status}
 */
export async function postApiCustomerLinksIdStatus(
  id: PostApiCustomerLinksIdStatusPathParams["id"],
  data: PostApiCustomerLinksIdStatusMutationRequest,
  config: Partial<RequestConfig<PostApiCustomerLinksIdStatusMutationRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    PostApiCustomerLinksIdStatusMutationResponse,
    ResponseErrorConfig<
      PostApiCustomerLinksIdStatus400 | PostApiCustomerLinksIdStatus404 | PostApiCustomerLinksIdStatus500
    >,
    PostApiCustomerLinksIdStatusMutationRequest
  >({ method: "POST", url: `/api/customer/links/${id}/status`, data: requestData, ...requestConfig });
  return res.data;
}

export function postApiCustomerLinksIdStatusMutationOptions(
  config: Partial<RequestConfig<PostApiCustomerLinksIdStatusMutationRequest>> & { client?: typeof fetch } = {},
) {
  const mutationKey = postApiCustomerLinksIdStatusMutationKey();
  return mutationOptions<
    PostApiCustomerLinksIdStatusMutationResponse,
    ResponseErrorConfig<
      PostApiCustomerLinksIdStatus400 | PostApiCustomerLinksIdStatus404 | PostApiCustomerLinksIdStatus500
    >,
    { id: PostApiCustomerLinksIdStatusPathParams["id"]; data: PostApiCustomerLinksIdStatusMutationRequest },
    typeof mutationKey
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return postApiCustomerLinksIdStatus(id, data, config);
    },
  });
}

/**
 * @summary Обновить статус ссылки по id
 * {@link /api/customer/links/:id/status}
 */
export function usePostApiCustomerLinksIdStatus<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PostApiCustomerLinksIdStatusMutationResponse,
      ResponseErrorConfig<
        PostApiCustomerLinksIdStatus400 | PostApiCustomerLinksIdStatus404 | PostApiCustomerLinksIdStatus500
      >,
      { id: PostApiCustomerLinksIdStatusPathParams["id"]; data: PostApiCustomerLinksIdStatusMutationRequest },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<PostApiCustomerLinksIdStatusMutationRequest>> & { client?: typeof fetch };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? postApiCustomerLinksIdStatusMutationKey();

  const baseOptions = postApiCustomerLinksIdStatusMutationOptions(config) as UseMutationOptions<
    PostApiCustomerLinksIdStatusMutationResponse,
    ResponseErrorConfig<
      PostApiCustomerLinksIdStatus400 | PostApiCustomerLinksIdStatus404 | PostApiCustomerLinksIdStatus500
    >,
    { id: PostApiCustomerLinksIdStatusPathParams["id"]; data: PostApiCustomerLinksIdStatusMutationRequest },
    TContext
  >;

  return useMutation<
    PostApiCustomerLinksIdStatusMutationResponse,
    ResponseErrorConfig<
      PostApiCustomerLinksIdStatus400 | PostApiCustomerLinksIdStatus404 | PostApiCustomerLinksIdStatus500
    >,
    { id: PostApiCustomerLinksIdStatusPathParams["id"]; data: PostApiCustomerLinksIdStatusMutationRequest },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    PostApiCustomerLinksIdStatusMutationResponse,
    ResponseErrorConfig<
      PostApiCustomerLinksIdStatus400 | PostApiCustomerLinksIdStatus404 | PostApiCustomerLinksIdStatus500
    >,
    { id: PostApiCustomerLinksIdStatusPathParams["id"]; data: PostApiCustomerLinksIdStatusMutationRequest },
    TContext
  >;
}
