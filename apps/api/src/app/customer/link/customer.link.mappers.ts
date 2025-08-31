import { config } from "../../../config";
import { Link } from "../../../persistence/db";
import { CustomerLinkView } from "./dto/customer.link.view";

const toCustomerLinkView = (link: Link): CustomerLinkView => {
  const { id, userId, status, name, token, redirectUrl, redirectCount, updatedAt, createdAt } = link;

  return {
    id,
    userId,
    status,
    name,
    token,
    redirectUrl,
    redirectCount,
    url: `${config.webAppUrl}/l/${token}`,
    updatedAt: updatedAt.toISOString(),
    createdAt: createdAt.toISOString(),
  };
};

export { toCustomerLinkView };
