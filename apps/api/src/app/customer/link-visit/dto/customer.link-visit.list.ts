import { z } from "@hono/zod-openapi";

import { PAGINATION_SCHEMA } from "../../../shared/pagination";
import { CUSTOMER_LINK_VISIT_VIEW } from "./customer.link-visit.view";

const CUSTOMER_LINK_VISIT_LIST = z.object({
  ...PAGINATION_SCHEMA.shape,
  items: z.array(CUSTOMER_LINK_VISIT_VIEW),
});

type CustomerLinkVisitList = z.infer<typeof CUSTOMER_LINK_VISIT_LIST>;

export { CUSTOMER_LINK_VISIT_LIST, type CustomerLinkVisitList };
