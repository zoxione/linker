import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_LINK_STATS = z.object({
  ...LINK_SCHEMA.pick({
    id: true,
    userId: true,
  }).shape,
  range: z.enum(["1w", "1m", "3m"]),
});

type CustomerLinkStats = z.infer<typeof CUSTOMER_LINK_STATS>;

export { CUSTOMER_LINK_STATS, type CustomerLinkStats };
