import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_STATS_LINK_VISITS = z.object({
  ...LINK_SCHEMA.pick({
    id: true,
    userId: true,
  }).shape,
  range: z.enum(["1w", "1m", "3m"]),
});

type CustomerStatsLinkVisits = z.infer<typeof CUSTOMER_STATS_LINK_VISITS>;

export { CUSTOMER_STATS_LINK_VISITS, type CustomerStatsLinkVisits };
