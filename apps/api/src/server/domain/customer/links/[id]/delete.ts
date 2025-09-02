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

const customerLinksIdDeleteRoute = contracts.serveApi().openapi(contract, async (c) => {
  const session = c.get("session");
  const { id } = c.req.valid("param");

  await app.customer.link.delete({ id, userId: session.userId });

  return c.body(null, 204);
});

export { customerLinksIdDeleteRoute };
