import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../../../../app";
import { CUSTOMER_STATS_LINK_LANGUAGES } from "../../../../../../../app/customer/stats/dto/customer.stats.link-languages";
import { CUSTOMER_STATS_LINK_LANGUAGES_RESPONSE } from "../../../../../../../app/customer/stats/dto/customer.stats.link-languages-response";
import { contracts } from "../../../../../../contracts";

const contract = createRoute({
  method: "get",
  path: "/{id}/stats/languages",
  tags: [contracts.tags.CUSTOMER_LINK],
  summary: "Получить статистику языков ссылки по id",
  middleware: [contracts.middlewares.auth] as const,
  request: {
    params: CUSTOMER_STATS_LINK_LANGUAGES.pick({ id: true }),
    query: CUSTOMER_STATS_LINK_LANGUAGES.omit({ id: true, userId: true }),
  },
  responses: {
    200: {
      description: "Статистика языков ссылки",
      content: {
        "application/json": {
          schema: CUSTOMER_STATS_LINK_LANGUAGES_RESPONSE,
        },
      },
    },
    400: {
      $ref: "#/components/responses/400",
    },
    404: {
      $ref: "#/components/responses/404",
    },
    500: {
      $ref: "#/components/responses/500",
    },
  },
});

const customerLinksIdStatsLanguagesGetRoute = contracts.serveApi().openapi(contract, async (c) => {
  const session = c.get("session");
  const { id } = c.req.valid("param");

  const stats = await app.customer.stats.linkLanguages({
    id,
    userId: session.userId,
  });

  return c.json(stats);
});

export { customerLinksIdStatsLanguagesGetRoute };
