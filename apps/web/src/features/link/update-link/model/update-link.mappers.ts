import { Link } from "@/entities/link/model/link.types";
import { PutApiCustomerLinksIdMutationRequest } from "@/shared/api";

import { UpdateLinkFormSchema } from "./update-link.schemas";

const toUpdateLinkAPI = (values: UpdateLinkFormSchema): PutApiCustomerLinksIdMutationRequest => {
  const { name } = values;

  return {
    name,
  };
};

const toUpdateLinkValues = (link: Link): UpdateLinkFormSchema => {
  const { name, redirectUrl, url, createdAt } = link;

  return {
    name,
    redirectUrl,
    url,
    createdAt,
  };
};

export { toUpdateLinkAPI, toUpdateLinkValues };
