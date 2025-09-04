import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../../../../app";
import { CUSTOMER_STATS_LINK_BROWSERS } from "../../../../../../../app/customer/stats/dto/customer.stats.link-browsers";
import { CUSTOMER_STATS_LINK_BROWSERS_RESPONSE } from "../../../../../../../app/customer/stats/dto/customer.stats.link-browsers-response";
import { contracts } from "../../../../../../contracts";

const contract = createRoute({
  method: "get",
  path: "/{id}/stats/browsers",
  tags: [contracts.tags.CUSTOMER_LINK],
  summary: "Получить статистику браузеров ссылки по id",
  middleware: [contracts.middlewares.auth] as const,
  request: {
    params: CUSTOMER_STATS_LINK_BROWSERS.pick({ id: true }),
    query: CUSTOMER_STATS_LINK_BROWSERS.omit({ id: true, userId: true }),
  },
  responses: {
    200: {
      description: "Статистика браузеров ссылки",
      content: {
        "application/json": {
          schema: CUSTOMER_STATS_LINK_BROWSERS_RESPONSE,
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

const customerLinksIdStatsBrowsersGetRoute = contracts.serveApi().openapi(contract, async (c) => {
  const session = c.get("session");
  const { id } = c.req.valid("param");

  const stats = await app.customer.stats.linkBrowsers({
    id,
    userId: session.userId,
  });

  return c.json(stats);
});

export { customerLinksIdStatsBrowsersGetRoute };
