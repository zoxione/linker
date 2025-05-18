import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../app";
import { CUSTOMER_LINK_CREATE } from "../../../../app/customer/link/dto/customer.link.create";
import { CUSTOMER_LINK_VIEW } from "../../../../app/customer/link/dto/customer.link.view";
import { contracts } from "../../../contracts";

const contract = createRoute({
  method: "post",
  path: "/",
  tags: [contracts.tags.CUSTOMER_LINK],
  summary: "Создать ссылку",
  middleware: [contracts.middlewares.auth] as const,
  request: {
    body: {
      content: {
        "application/json": {
          schema: CUSTOMER_LINK_CREATE.omit({ userId: true }),
        },
      },
    },
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
      description: "Неверные входные данные",
    },
  },
});

const customerLinksPostRoute = contracts.serveApi().openapi(contract, async (c) => {
  const session = c.get("session");
  const createDto = c.req.valid("json");

  const link = await app.customer.link.create({
    userId: session.userId,
    ...createDto,
  });

  return c.json(link);
});

export { customerLinksPostRoute };
