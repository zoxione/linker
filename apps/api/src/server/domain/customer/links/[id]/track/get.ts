import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../../../app";
import { CUSTOMER_LINK_TRACK } from "../../../../../../app/customer/link/dto/customer.link.track";
import { contracts } from "../../../../../contracts";

const contract = createRoute({
  method: "get",
  path: "/{token}/track",
  tags: [contracts.tags.CUSTOMER_LINK],
  summary: "Отследить переход по ссылке по token",
  request: {
    params: CUSTOMER_LINK_TRACK.pick({ token: true }),
  },
  responses: {
    302: {
      description: "Перенаправление на целевую страницу",
    },
    400: {
      description: "Неверные входные данные",
    },
    404: {
      description: "Ссылка не найдена",
    },
  },
});

const customerLinksIdTrackGetRoute = contracts.serveApi().openapi(contract, async (c) => {
  const { token } = c.req.valid("param");

  const link = await app.customer.link.track({ token });

  return c.redirect(link.redirectUrl);
});

export { customerLinksIdTrackGetRoute };
