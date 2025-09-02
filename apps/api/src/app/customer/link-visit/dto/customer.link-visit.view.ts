import { z } from "@hono/zod-openapi";

import { LINK_VISIT_SCHEMA } from "../../../shared/entities/link-visit";

const CUSTOMER_LINK_VISIT_VIEW = z.object({
  ...LINK_VISIT_SCHEMA.pick({
    id: true,
    linkId: true,
    ip: true,
    language: true,
    browser: true,
    cpu: true,
    device: true,
    engine: true,
    os: true,
    referer: true,
    headers: true,
    updatedAt: true,
    createdAt: true,
  }).shape,
});

type CustomerLinkVisitView = z.infer<typeof CUSTOMER_LINK_VISIT_VIEW>;

export { CUSTOMER_LINK_VISIT_VIEW, type CustomerLinkVisitView };
