import { z } from "@hono/zod-openapi";

const BASE_ENTITY_SCHEMA = z.object({
  updatedAt: z.iso.datetime(),
  createdAt: z.iso.datetime(),
});

export { BASE_ENTITY_SCHEMA };
