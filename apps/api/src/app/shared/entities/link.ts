import { z } from "@hono/zod-openapi";

import { dbSchema } from "../../../persistence/db";
import { BASE_ENTITY_PROPERTIES } from "../base-entity";

const LINK_STATUS_SCHEMA = z.enum(dbSchema.linkStatus.enumValues);

const LINK_SCHEMA = z
  .object({
    id: z.string(),
    userId: z.string(),
    status: LINK_STATUS_SCHEMA,
    name: z.string(),
    token: z.string(),
    redirectUrl: z.string(),
    redirectCount: z.number(),
  })
  .merge(BASE_ENTITY_PROPERTIES);

export { LINK_SCHEMA };
