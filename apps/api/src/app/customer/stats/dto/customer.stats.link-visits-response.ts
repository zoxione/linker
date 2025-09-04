import { z } from "@hono/zod-openapi";

const CUSTOMER_STATS_LINK_VISITS_RESPONSE = z.object({
  items: z.array(
    z.object({
      date: z.string(),
      value: z.coerce.number().openapi({ type: "number" }),
    }),
  ),
});

type CustomerStatsLinkVisitsResponse = z.infer<typeof CUSTOMER_STATS_LINK_VISITS_RESPONSE>;

export { CUSTOMER_STATS_LINK_VISITS_RESPONSE, type CustomerStatsLinkVisitsResponse };
