import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_STATS_LINK_BROWSERS = z.object({
  ...LINK_SCHEMA.pick({
    id: true,
    userId: true,
  }).shape,
});

type CustomerStatsLinkBrowsers = z.infer<typeof CUSTOMER_STATS_LINK_BROWSERS>;

export { CUSTOMER_STATS_LINK_BROWSERS, type CustomerStatsLinkBrowsers };
