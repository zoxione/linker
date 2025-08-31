import { z } from "@hono/zod-openapi";

import { LINK_SCHEMA } from "../../../shared/entities/link";

const CUSTOMER_LINK_TRACK = z.object({
  ...LINK_SCHEMA.pick({
    token: true,
  }).shape,
});

type CustomerLinkTrack = z.infer<typeof CUSTOMER_LINK_TRACK>;

export { CUSTOMER_LINK_TRACK, type CustomerLinkTrack };
