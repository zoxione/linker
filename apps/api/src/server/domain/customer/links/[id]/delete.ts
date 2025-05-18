import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../../app";
import { CUSTOMER_LINK_DELETE } from "../../../../../app/customer/link/dto/customer.link.delete";
import { contracts } from "../../../../contracts";

const contract = createRoute({
  method: "delete",
  path: "/{id}",
  tags: [contracts.tags.CUSTOMER_LINK],
  summary: "Удалить ссылку по id",
  middleware: [contracts.middlewares.auth] as const,
  request: {
    params: CUSTOMER_LINK_DELETE.pick({ id: true }),
  },
  responses: {
    204: {
      description: "Ссылка удалена",
    },
    400: {
      description: "Неверные входные данные",
    },
    404: {
      description: "Ссылка не найдена",
    },
  },
});

const customerLinksIdDeleteRoute = contracts.serveApi().openapi(contract, async (c) => {
  const { id } = c.req.valid("param");

  await app.customer.link.delete({ id });

  return c.body(null, 204);
});

export { customerLinksIdDeleteRoute };
