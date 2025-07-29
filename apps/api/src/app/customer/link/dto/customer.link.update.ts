import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_LINK_UPDATE = z.object({
  ...LINK_SCHEMA.pick({
    id: true,
    name: true,
  }).shape,
});

type CustomerLinkUpdate = z.infer<typeof CUSTOMER_LINK_UPDATE>;

export { CUSTOMER_LINK_UPDATE, type CustomerLinkUpdate };
