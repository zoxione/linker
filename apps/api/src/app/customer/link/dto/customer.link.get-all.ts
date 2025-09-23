import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";
import { PAGINATION_SCHEMA } from "../../../shared/pagination";

const CUSTOMER_LINK_GET_ALL = z.object({
  ...LINK_SCHEMA.pick({
    userId: true,
  }).shape,
  sortBy: z.enum(["name", "redirectCount", "createdAt"]).optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
  status: LINK_SCHEMA.shape.status.optional(),
  ...PAGINATION_SCHEMA.pick({ limit: true, offset: true }).shape,
});

type CustomerLinkGetAll = z.infer<typeof CUSTOMER_LINK_GET_ALL>;

export { CUSTOMER_LINK_GET_ALL, type CustomerLinkGetAll };
