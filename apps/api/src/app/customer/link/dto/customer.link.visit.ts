import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";
import { LINK_VISIT_SCHEMA } from "../../../shared/entities/link-visit";

const CUSTOMER_LINK_VISIT = z.object({
  ...LINK_SCHEMA.pick({
    token: true,
  }).shape,
  ...LINK_VISIT_SCHEMA.pick({
    ip: true,
    language: true,
    browser: true,
    cpu: true,
    device: true,
    engine: true,
    os: true,
    referer: true,
    headers: true,
  }).shape,
});

type CustomerLinkVisit = z.infer<typeof CUSTOMER_LINK_VISIT>;

export { CUSTOMER_LINK_VISIT, type CustomerLinkVisit };
