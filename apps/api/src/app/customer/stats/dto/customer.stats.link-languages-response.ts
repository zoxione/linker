import { z } from "@hono/zod-openapi";

const CUSTOMER_STATS_LINK_LANGUAGES_RESPONSE = z.object({
  items: z.array(
    z.object({
      language: z.string(),
      value: z.coerce.number().openapi({ type: "number" }),
    }),
  ),
});

type CustomerStatsLinkLanguagesResponse = z.infer<typeof CUSTOMER_STATS_LINK_LANGUAGES_RESPONSE>;

export { CUSTOMER_STATS_LINK_LANGUAGES_RESPONSE, type CustomerStatsLinkLanguagesResponse };
