import { z } from "@hono/zod-openapi";

import { PAGINATION_SCHEMA } from "../../../shared/pagination";

const CUSTOMER_LINK_GET_ALL = z.object({
  ...PAGINATION_SCHEMA.pick({ limit: true, offset: true }).shape,
});

type CustomerLinkGetAll = z.infer<typeof CUSTOMER_LINK_GET_ALL>;

export { CUSTOMER_LINK_GET_ALL, type CustomerLinkGetAll };
