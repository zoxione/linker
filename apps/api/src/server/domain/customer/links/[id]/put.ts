import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../../app";
import { CUSTOMER_LINK_UPDATE } from "../../../../../app/customer/link/dto/customer.link.update";
import { CUSTOMER_LINK_VIEW } from "../../../../../app/customer/link/dto/customer.link.view";
import { contracts } from "../../../../contracts";

const contract = createRoute({
  method: "put",
  path: "/{id}",
  tags: [contracts.tags.CUSTOMER_LINK],
  summary: "Обновить ссылку по id",
  middleware: [contracts.middlewares.auth] as const,
  request: {
    params: CUSTOMER_LINK_UPDATE.pick({ id: true }),
    body: {
      content: {
        "application/json": {
          schema: CUSTOMER_LINK_UPDATE.omit({ id: true }),
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
    404: {
      description: "Ссылка не найдена",
    },
  },
});

const customerLinksIdPutRoute = contracts.serveApi().openapi(contract, async (c) => {
  const { id } = c.req.valid("param");
  const updateDto = c.req.valid("json");

  const link = await app.customer.link.update({
    id,
    ...updateDto,
  });

  return c.json(link);
});

export { customerLinksIdPutRoute };
