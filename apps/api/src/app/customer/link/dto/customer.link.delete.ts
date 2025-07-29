import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_LINK_DELETE = z.object({
  ...LINK_SCHEMA.pick({
    id: true,
  }).shape,
});

type CustomerLinkDelete = z.infer<typeof CUSTOMER_LINK_DELETE>;

export { CUSTOMER_LINK_DELETE, type CustomerLinkDelete };
