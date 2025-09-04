import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_STATS_LINK_LANGUAGES = z.object({
  ...LINK_SCHEMA.pick({
    id: true,
    userId: true,
  }).shape,
});

type CustomerStatsLinkLanguages = z.infer<typeof CUSTOMER_STATS_LINK_LANGUAGES>;

export { CUSTOMER_STATS_LINK_LANGUAGES, type CustomerStatsLinkLanguages };
