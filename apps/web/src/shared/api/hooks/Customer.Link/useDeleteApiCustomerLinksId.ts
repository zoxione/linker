/* eslint-disable */
// @ts-nocheck
import type { QueryClient, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { mutationOptions, useMutation } from "@tanstack/react-query";

import fetch from "../../../lib/fetch-client";
import type { RequestConfig, ResponseErrorConfig } from "../../../lib/fetch-client";
import type {
  DeleteApiCustomerLinksId400,
  DeleteApiCustomerLinksId404,
  DeleteApiCustomerLinksId500,
  DeleteApiCustomerLinksIdMutationResponse,
  DeleteApiCustomerLinksIdPathParams,
} from "../../types/Customer.Link/DeleteApiCustomerLinksId";

export const deleteApiCustomerLinksIdMutationKey = () => [{ url: "/api/customer/links/:id" }] as const;

export type DeleteApiCustomerLinksIdMutationKey = ReturnType<typeof deleteApiCustomerLinksIdMutationKey>;

/**
 * @summary Удалить ссылку по id
 * {@link /api/customer/links/:id}
 */
export async function deleteApiCustomerLinksId(
  id: DeleteApiCustomerLinksIdPathParams["id"],
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const res = await request<
    DeleteApiCustomerLinksIdMutationResponse,
    ResponseErrorConfig<DeleteApiCustomerLinksId400 | DeleteApiCustomerLinksId404 | DeleteApiCustomerLinksId500>,
    unknown
  >({ method: "DELETE", url: `/api/customer/links/${id}`, ...requestConfig });
  return res.data;
}

export function deleteApiCustomerLinksIdMutationOptions(
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const mutationKey = deleteApiCustomerLinksIdMutationKey();
  return mutationOptions<
    DeleteApiCustomerLinksIdMutationResponse,
    ResponseErrorConfig<DeleteApiCustomerLinksId400 | DeleteApiCustomerLinksId404 | DeleteApiCustomerLinksId500>,
    { id: DeleteApiCustomerLinksIdPathParams["id"] },
    typeof mutationKey
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return deleteApiCustomerLinksId(id, config);
    },
  });
}

/**
 * @summary Удалить ссылку по id
 * {@link /api/customer/links/:id}
 */
export function useDeleteApiCustomerLinksId<TContext>(
  options: {
    mutation?: UseMutationOptions<
      DeleteApiCustomerLinksIdMutationResponse,
      ResponseErrorConfig<DeleteApiCustomerLinksId400 | DeleteApiCustomerLinksId404 | DeleteApiCustomerLinksId500>,
      { id: DeleteApiCustomerLinksIdPathParams["id"] },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof fetch };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? deleteApiCustomerLinksIdMutationKey();

  const baseOptions = deleteApiCustomerLinksIdMutationOptions(config) as UseMutationOptions<
    DeleteApiCustomerLinksIdMutationResponse,
    ResponseErrorConfig<DeleteApiCustomerLinksId400 | DeleteApiCustomerLinksId404 | DeleteApiCustomerLinksId500>,
    { id: DeleteApiCustomerLinksIdPathParams["id"] },
    TContext
  >;

  return useMutation<
    DeleteApiCustomerLinksIdMutationResponse,
    ResponseErrorConfig<DeleteApiCustomerLinksId400 | DeleteApiCustomerLinksId404 | DeleteApiCustomerLinksId500>,
    { id: DeleteApiCustomerLinksIdPathParams["id"] },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    DeleteApiCustomerLinksIdMutationResponse,
    ResponseErrorConfig<DeleteApiCustomerLinksId400 | DeleteApiCustomerLinksId404 | DeleteApiCustomerLinksId500>,
    { id: DeleteApiCustomerLinksIdPathParams["id"] },
    TContext
  >;
}
