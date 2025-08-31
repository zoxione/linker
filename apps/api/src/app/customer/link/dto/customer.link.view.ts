import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_LINK_VIEW = z.object({
  ...LINK_SCHEMA.pick({
    id: true,
    userId: true,
    status: true,
    name: true,
    token: true,
    redirectUrl: true,
    redirectCount: true,
    url: true,
    updatedAt: true,
    createdAt: true,
  }).shape,
});

type CustomerLinkView = z.infer<typeof CUSTOMER_LINK_VIEW>;

export { CUSTOMER_LINK_VIEW, type CustomerLinkView };
