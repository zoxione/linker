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
    url: `${config.webAppUrl}/r/${token}`, // TODO
    updatedAt,
    createdAt,
  };
};

export { toCustomerLinkView };
