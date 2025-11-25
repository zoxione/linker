/* eslint-disable */
// @ts-nocheck
import type { QueryClient, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { mutationOptions, useMutation } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  PostApiCustomerLinks400,
  PostApiCustomerLinks500,
  PostApiCustomerLinksMutationRequest,
  PostApiCustomerLinksMutationResponse,
} from "../../types/Customer.Link/PostApiCustomerLinks";

export const postApiCustomerLinksMutationKey = () => [{ url: "/api/customer/links" }] as const;

export type PostApiCustomerLinksMutationKey = ReturnType<typeof postApiCustomerLinksMutationKey>;

/**
 * @summary Создать ссылку
 * {@link /api/customer/links}
 */
export async function postApiCustomerLinks(
  data: PostApiCustomerLinksMutationRequest,
  config: Partial<RequestConfig<PostApiCustomerLinksMutationRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    PostApiCustomerLinksMutationResponse,
    ResponseErrorConfig<PostApiCustomerLinks400 | PostApiCustomerLinks500>,
    PostApiCustomerLinksMutationRequest
  >({ method: "POST", url: `/api/customer/links`, data: requestData, ...requestConfig });
  return res.data;
}

export function postApiCustomerLinksMutationOptions(
  config: Partial<RequestConfig<PostApiCustomerLinksMutationRequest>> & { client?: typeof fetch } = {},
) {
  const mutationKey = postApiCustomerLinksMutationKey();
  return mutationOptions<
    PostApiCustomerLinksMutationResponse,
    ResponseErrorConfig<PostApiCustomerLinks400 | PostApiCustomerLinks500>,
    { data: PostApiCustomerLinksMutationRequest },
    typeof mutationKey
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return postApiCustomerLinks(data, config);
    },
  });
}

/**
 * @summary Создать ссылку
 * {@link /api/customer/links}
 */
export function usePostApiCustomerLinks<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PostApiCustomerLinksMutationResponse,
      ResponseErrorConfig<PostApiCustomerLinks400 | PostApiCustomerLinks500>,
      { data: PostApiCustomerLinksMutationRequest },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<PostApiCustomerLinksMutationRequest>> & { client?: typeof fetch };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? postApiCustomerLinksMutationKey();

  const baseOptions = postApiCustomerLinksMutationOptions(config) as UseMutationOptions<
    PostApiCustomerLinksMutationResponse,
    ResponseErrorConfig<PostApiCustomerLinks400 | PostApiCustomerLinks500>,
    { data: PostApiCustomerLinksMutationRequest },
    TContext
  >;

  return useMutation<
    PostApiCustomerLinksMutationResponse,
    ResponseErrorConfig<PostApiCustomerLinks400 | PostApiCustomerLinks500>,
    { data: PostApiCustomerLinksMutationRequest },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    PostApiCustomerLinksMutationResponse,
    ResponseErrorConfig<PostApiCustomerLinks400 | PostApiCustomerLinks500>,
    { data: PostApiCustomerLinksMutationRequest },
    TContext
  >;
}
