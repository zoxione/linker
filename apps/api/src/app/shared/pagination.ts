import { z } from "@hono/zod-openapi";

const PAGINATION_SCHEMA = z.object({
  limit: z.coerce.number().min(0).max(100),
  offset: z.coerce.number().min(0).max(Number.MAX_SAFE_INTEGER),
  count: z.number(),
  total: z.number(),
});

export { PAGINATION_SCHEMA };
