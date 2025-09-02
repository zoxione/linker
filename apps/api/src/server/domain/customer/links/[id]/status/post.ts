import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../../../app";
import { CUSTOMER_LINK_UPDATE_STATUS } from "../../../../../../app/customer/link/dto/customer.link.update-status";
import { CUSTOMER_LINK_VIEW } from "../../../../../../app/customer/link/dto/customer.link.view";
import { contracts } from "../../../../../contracts";

const contract = createRoute({
  method: "post",
  path: "/{id}/status",
  tags: [contracts.tags.CUSTOMER_LINK],
  summary: "Обновить статус ссылки по id",
  middleware: [contracts.middlewares.auth] as const,
  request: {
    params: CUSTOMER_LINK_UPDATE_STATUS.pick({ id: true }),
    body: {
      content: {
        "application/json": {
          schema: CUSTOMER_LINK_UPDATE_STATUS.omit({ id: true, userId: true }),
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

const customerLinksIdStatusPostRoute = contracts.serveApi().openapi(contract, async (c) => {
  const session = c.get("session");
  const { id } = c.req.valid("param");
  const updateDto = c.req.valid("json");

  const link = await app.customer.link.updateStatus({
    id,
    userId: session.userId,
    ...updateDto,
  });

  return c.json(link);
});

export { customerLinksIdStatusPostRoute };
