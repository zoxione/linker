import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_LINK_GET_ONE = z.object({
  ...LINK_SCHEMA.pick({
    id: true,
  }).shape,
});

type CustomerLinkGetOne = z.infer<typeof CUSTOMER_LINK_GET_ONE>;

export { CUSTOMER_LINK_GET_ONE, type CustomerLinkGetOne };
