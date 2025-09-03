import { z } from "@hono/zod-openapi";

const CUSTOMER_STATS_GLOBAL_RESPONSE = z.object({
  totalLinks: z.coerce.number().openapi({ type: "number" }),
  totalLinkVisits: z.coerce.number().openapi({ type: "number" }),
});

type CustomerStatsGlobalResponse = z.infer<typeof CUSTOMER_STATS_GLOBAL_RESPONSE>;

export { CUSTOMER_STATS_GLOBAL_RESPONSE, type CustomerStatsGlobalResponse };
