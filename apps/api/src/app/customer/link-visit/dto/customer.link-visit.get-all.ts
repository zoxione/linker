import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";
import { PAGINATION_SCHEMA } from "../../../shared/pagination";

const CUSTOMER_LINK_VISIT_GET_ALL = z.object({
  ...LINK_SCHEMA.pick({
    userId: true,
  }).shape,
  ...PAGINATION_SCHEMA.pick({ limit: true, offset: true }).shape,
});

type CustomerLinkVisitGetAll = z.infer<typeof CUSTOMER_LINK_VISIT_GET_ALL>;

export { CUSTOMER_LINK_VISIT_GET_ALL, type CustomerLinkVisitGetAll };
