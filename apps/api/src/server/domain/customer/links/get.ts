import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../app";
import { CUSTOMER_LINK_GET_ALL } from "../../../../app/customer/link/dto/customer.link.get-all";
import { CUSTOMER_LINK_LIST } from "../../../../app/customer/link/dto/customer.link.list";
import { contracts } from "../../../contracts";

const contract = createRoute({
  method: "get",
  path: "/",
  tags: [contracts.tags.CUSTOMER_LINK],
  summary: "Получить ссылки",
  middleware: [contracts.middlewares.auth] as const,
  request: {
    query: CUSTOMER_LINK_GET_ALL,
  },
  responses: {
    200: {
      description: "Список ссылок",
      content: {
        "application/json": {
          schema: CUSTOMER_LINK_LIST,
        },
      },
    },
    400: {
      description: "Неверные входные данные",
    },
  },
});

const customerLinksGetRoute = contracts.serveApi().openapi(contract, async (c) => {
  const { limit, offset } = c.req.valid("query");

  const links = await app.customer.link.getAll({
    limit,
    offset,
  });

  return c.json(links);
});

export { customerLinksGetRoute };
