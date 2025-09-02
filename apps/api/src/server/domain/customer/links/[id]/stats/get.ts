import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../../../app";
import { CUSTOMER_LINK_STATS } from "../../../../../../app/customer/link/dto/customer.link.stats";
import { CUSTOMER_LINK_STATS_RESPONSE } from "../../../../../../app/customer/link/dto/customer.link.stats-response";
import { contracts } from "../../../../../contracts";

const contract = createRoute({
  method: "get",
  path: "/{id}/stats",
  tags: [contracts.tags.CUSTOMER_LINK],
  summary: "Получить статистику ссылки по id",
  middleware: [contracts.middlewares.auth] as const,
  request: {
    params: CUSTOMER_LINK_STATS.pick({ id: true }),
    query: CUSTOMER_LINK_STATS.omit({ id: true, userId: true }),
  },
  responses: {
    200: {
      description: "Статистика ссылки",
      content: {
        "application/json": {
          schema: CUSTOMER_LINK_STATS_RESPONSE,
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

const customerLinksIdStatsGetRoute = contracts.serveApi().openapi(contract, async (c) => {
  const session = c.get("session");
  const { id } = c.req.valid("param");
  const { range } = c.req.valid("query");

  const stats = await app.customer.link.stats({
    id,
    userId: session.userId,
    range,
  });

  return c.json(stats);
});

export { customerLinksIdStatsGetRoute };
