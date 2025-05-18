import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_LINK_GET_ONE = LINK_SCHEMA.pick({
  id: true,
});

type CustomerLinkGetOne = z.infer<typeof CUSTOMER_LINK_GET_ONE>;

export { CUSTOMER_LINK_GET_ONE, type CustomerLinkGetOne };
