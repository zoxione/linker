import { z } from "@hono/zod-openapi";

const CUSTOMER_LINK_STATS_RESPONSE = z.object({
  items: z.array(
    z.object({
      date: z.string(),
      value: z.number(),
    }),
  ),
});

type CustomerLinkStatsResponse = z.infer<typeof CUSTOMER_LINK_STATS_RESPONSE>;

export { CUSTOMER_LINK_STATS_RESPONSE, type CustomerLinkStatsResponse };
