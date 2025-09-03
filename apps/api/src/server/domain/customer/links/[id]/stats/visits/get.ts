import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../../../../app";
import { CUSTOMER_STATS_LINK_VISITS } from "../../../../../../../app/customer/stats/dto/customer.stats.link-visits";
import { CUSTOMER_STATS_LINK_VISITS_RESPONSE } from "../../../../../../../app/customer/stats/dto/customer.stats.link-visits-response copy";
import { contracts } from "../../../../../../contracts";

const contract = createRoute({
  method: "get",
  path: "/{id}/stats/visits",
  tags: [contracts.tags.CUSTOMER_LINK],
  summary: "Получить статистику переходов по ссылке по id",
  middleware: [contracts.middlewares.auth] as const,
  request: {
    params: CUSTOMER_STATS_LINK_VISITS.pick({ id: true }),
    query: CUSTOMER_STATS_LINK_VISITS.omit({ id: true, userId: true }),
  },
  responses: {
    200: {
      description: "Статистика ссылки",
      content: {
        "application/json": {
          schema: CUSTOMER_STATS_LINK_VISITS_RESPONSE,
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

const customerLinksIdStatsVisitsGetRoute = contracts.serveApi().openapi(contract, async (c) => {
  const session = c.get("session");
  const { id } = c.req.valid("param");
  const { range } = c.req.valid("query");

  const stats = await app.customer.stats.linkVisits({
    id,
    userId: session.userId,
    range,
  });

  return c.json(stats);
});

export { customerLinksIdStatsVisitsGetRoute };
