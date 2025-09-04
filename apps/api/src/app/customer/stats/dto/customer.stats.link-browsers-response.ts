import { z } from "@hono/zod-openapi";

const CUSTOMER_STATS_LINK_BROWSERS_RESPONSE = z.object({
  items: z.array(
    z.object({
      browser: z.string(),
      value: z.coerce.number().openapi({ type: "number" }),
    }),
  ),
});

type CustomerStatsLinkBrowsersResponse = z.infer<typeof CUSTOMER_STATS_LINK_BROWSERS_RESPONSE>;

export { CUSTOMER_STATS_LINK_BROWSERS_RESPONSE, type CustomerStatsLinkBrowsersResponse };
