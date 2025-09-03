import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_STATS_GLOBAL = z.object({
  ...LINK_SCHEMA.pick({
    userId: true,
  }).shape,
});

type CustomerStatsGlobal = z.infer<typeof CUSTOMER_STATS_GLOBAL>;

export { CUSTOMER_STATS_GLOBAL, type CustomerStatsGlobal };
