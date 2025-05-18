import { z } from "@hono/zod-openapi";

import { PAGINATION_PROPERTIES } from "../../../shared/pagination";
import { CUSTOMER_LINK_VIEW } from "./customer.link.view";

const CUSTOMER_LINK_LIST = z
  .object({
    items: z.array(CUSTOMER_LINK_VIEW),
  })
  .merge(PAGINATION_PROPERTIES);

type CustomerLinkList = z.infer<typeof CUSTOMER_LINK_LIST>;

export { CUSTOMER_LINK_LIST, type CustomerLinkList };
