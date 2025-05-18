import { z } from "@hono/zod-openapi";

import { PAGINATION_PROPERTIES } from "../../../shared/pagination";

const CUSTOMER_LINK_GET_ALL = PAGINATION_PROPERTIES.pick({ limit: true, offset: true });

type CustomerLinkGetAll = z.infer<typeof CUSTOMER_LINK_GET_ALL>;

export { CUSTOMER_LINK_GET_ALL, type CustomerLinkGetAll };
