import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../../app";
import { CUSTOMER_STATS_GLOBAL_RESPONSE } from "../../../../../app/customer/stats/dto/customer.stats.global";
import { CUSTOMER_STATS_GLOBAL } from "../../../../../app/customer/stats/dto/customer.stats.global-response";
import { contracts } from "../../../../contracts";

const contract = createRoute({
  method: "get",
  path: "/global",
  tags: [contracts.tags.CUSTOMER_STATS],
  summary: "Получить глобальную статистику",
  middleware: [contracts.middlewares.auth] as const,
  request: {
    query: CUSTOMER_STATS_GLOBAL.omit({ userId: true }),
  },
  responses: {
    200: {
      description: "Глобальная статистика",
      content: {
        "application/json": {
          schema: CUSTOMER_STATS_GLOBAL_RESPONSE,
        },
      },
    },
    400: {
      $ref: "#/components/responses/400",
    },
    500: {
      $ref: "#/components/responses/500",
    },
  },
});

const customerStatsGlobalGetRoute = contracts.serveApi().openapi(contract, async (c) => {
  const session = c.get("session");

  const stats = await app.customer.stats.global({
    userId: session.userId,
  });

  return c.json(stats);
});

export { customerStatsGlobalGetRoute };
