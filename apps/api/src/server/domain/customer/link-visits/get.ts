import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../app";
import { CUSTOMER_LINK_VISIT_GET_ALL } from "../../../../app/customer/link-visit/dto/customer.link-visit.get-all";
import { CUSTOMER_LINK_VISIT_LIST } from "../../../../app/customer/link-visit/dto/customer.link-visit.list";
import { contracts } from "../../../contracts";

const contract = createRoute({
  method: "get",
  path: "/",
  tags: [contracts.tags.CUSTOMER_LINK_VISIT],
  summary: "Получить посещения ссылок",
  middleware: [contracts.middlewares.auth] as const,
  request: {
    query: CUSTOMER_LINK_VISIT_GET_ALL.omit({ userId: true }),
  },
  responses: {
    200: {
      description: "Список посещений ссылок",
      content: {
        "application/json": {
          schema: CUSTOMER_LINK_VISIT_LIST,
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

const customerLinkVisitsGetRoute = contracts.serveApi().openapi(contract, async (c) => {
  const session = c.get("session");
  const { limit, offset } = c.req.valid("query");

  const linkVisits = await app.customer.linkVisit.getAll({
    userId: session.userId,
    limit,
    offset,
  });

  return c.json(linkVisits);
});

export { customerLinkVisitsGetRoute };
