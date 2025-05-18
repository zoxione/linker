import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_LINK_CREATE = LINK_SCHEMA.pick({
  userId: true,
  name: true,
  redirectUrl: true,
});

type CustomerLinkCreate = z.infer<typeof CUSTOMER_LINK_CREATE>;

export { CUSTOMER_LINK_CREATE, type CustomerLinkCreate };
