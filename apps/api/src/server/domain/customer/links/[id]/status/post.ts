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
          schema: CUSTOMER_LINK_UPDATE_STATUS.omit({ id: true }),
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

const customerLinksIdStatusPostRoute = contracts.serveApi().openapi(contract, async (c) => {
  const { id } = c.req.valid("param");
  const updateDto = c.req.valid("json");

  const link = await app.customer.link.updateStatus({
    id,
    ...updateDto,
  });

  return c.json(link);
});

export { customerLinksIdStatusPostRoute };
