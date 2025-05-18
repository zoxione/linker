import { z } from "@hono/zod-openapi";

const BASE_ENTITY_PROPERTIES = z.object({
  updatedAt: z.date(),
  createdAt: z.date(),
});

export { BASE_ENTITY_PROPERTIES };
