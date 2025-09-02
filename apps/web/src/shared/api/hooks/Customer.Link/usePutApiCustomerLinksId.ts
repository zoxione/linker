/* eslint-disable */
// @ts-nocheck
import type { UseMutationOptions, QueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  PutApiCustomerLinksIdMutationRequest,
  PutApiCustomerLinksIdMutationResponse,
  PutApiCustomerLinksIdPathParams,
  PutApiCustomerLinksId400,
  PutApiCustomerLinksId404,
} from "../../types/Customer.Link/PutApiCustomerLinksId";

export const putApiCustomerLinksIdMutationKey = () => [{ url: "/api/customer/links/{id}" }] as const;

export type PutApiCustomerLinksIdMutationKey = ReturnType<typeof putApiCustomerLinksIdMutationKey>;

/**
 * @summary Обновить ссылку по id
 * {@link /api/customer/links/:id}
 */
export async function putApiCustomerLinksId(
  id: PutApiCustomerLinksIdPathParams["id"],
  data: PutApiCustomerLinksIdMutationRequest,
  config: Partial<RequestConfig<PutApiCustomerLinksIdMutationRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const requestData = data;
  const res = await request<
    PutApiCustomerLinksIdMutationResponse,
    ResponseErrorConfig<PutApiCustomerLinksId400 | PutApiCustomerLinksId404>,
    PutApiCustomerLinksIdMutationRequest
  >({ method: "PUT", url: `/api/customer/links/${id}`, data: requestData, ...requestConfig });
  return res.data;
}

/**
 * @summary Обновить ссылку по id
 * {@link /api/customer/links/:id}
 */
export function usePutApiCustomerLinksId<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PutApiCustomerLinksIdMutationResponse,
      ResponseErrorConfig<PutApiCustomerLinksId400 | PutApiCustomerLinksId404>,
      { id: PutApiCustomerLinksIdPathParams["id"]; data: PutApiCustomerLinksIdMutationRequest },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<PutApiCustomerLinksIdMutationRequest>> & { client?: typeof fetch };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? putApiCustomerLinksIdMutationKey();

  return useMutation<
    PutApiCustomerLinksIdMutationResponse,
    ResponseErrorConfig<PutApiCustomerLinksId400 | PutApiCustomerLinksId404>,
    { id: PutApiCustomerLinksIdPathParams["id"]; data: PutApiCustomerLinksIdMutationRequest },
    TContext
  >(
    {
      mutationFn: async ({ id, data }) => {
        return putApiCustomerLinksId(id, data, config);
      },
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  );
}
