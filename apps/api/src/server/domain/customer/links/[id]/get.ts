import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../../app";
import { CUSTOMER_LINK_GET_ONE } from "../../../../../app/customer/link/dto/customer.link.get-one";
import { CUSTOMER_LINK_VIEW } from "../../../../../app/customer/link/dto/customer.link.view";
import { contracts } from "../../../../contracts";

const contract = createRoute({
  method: "get",
  path: "/{id}",
  tags: [contracts.tags.CUSTOMER_LINK],
  summary: "Получить ссылку по id",
  middleware: [contracts.middlewares.auth] as const,
  request: {
    params: CUSTOMER_LINK_GET_ONE.pick({ id: true }),
  },
  responses: {
    200: {
      description: "Объект ссылки",
      content: {
        "application/json": {
          schema: CUSTOMER_LINK_VIEW,
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

const customerLinksIdGetRoute = contracts.serveApi().openapi(contract, async (c) => {
  const session = c.get("session");
  const { id } = c.req.valid("param");

  const link = await app.customer.link.getOne({ id, userId: session.userId });

  return c.json(link);
});

export { customerLinksIdGetRoute };
