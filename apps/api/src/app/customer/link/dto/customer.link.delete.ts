import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_LINK_DELETE = LINK_SCHEMA.pick({
  id: true,
});

type CustomerLinkDelete = z.infer<typeof CUSTOMER_LINK_DELETE>;

export { CUSTOMER_LINK_DELETE, type CustomerLinkDelete };
