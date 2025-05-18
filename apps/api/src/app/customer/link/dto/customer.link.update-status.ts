import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_LINK_UPDATE_STATUS = LINK_SCHEMA.pick({
  id: true,
  status: true,
});

type CustomerLinkUpdateStatus = z.infer<typeof CUSTOMER_LINK_UPDATE_STATUS>;

export { CUSTOMER_LINK_UPDATE_STATUS, type CustomerLinkUpdateStatus };
