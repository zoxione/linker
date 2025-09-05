import { PostApiCustomerLinksMutationRequest } from "@/shared/api";

import { CreateLinkFormSchema } from "./create-link.schemas";

const toCreateLinkAPI = (values: CreateLinkFormSchema): PostApiCustomerLinksMutationRequest => {
  const { name, redirectUrl } = values;

  return {
    name,
    redirectUrl,
  };
};

const toCreateLinkValues = (): CreateLinkFormSchema => {
  return {
    name: "",
    redirectUrl: "",
  };
};

export { toCreateLinkAPI, toCreateLinkValues };
