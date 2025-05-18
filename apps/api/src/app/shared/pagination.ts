import { z } from "@hono/zod-openapi";

const MINIMUM_LIMIT = 0;
const MAXIMUM_LIMIT = 100;
const MINIMUM_OFFSET = 0;
const MAXIMUM_OFFSET = Number.MAX_SAFE_INTEGER;

const PAGINATION_PROPERTIES = z.object({
  limit: z.coerce.number().min(MINIMUM_LIMIT).max(MAXIMUM_LIMIT),
  offset: z.coerce.number().min(MINIMUM_OFFSET).max(MAXIMUM_OFFSET),
  total: z.coerce.number(),
});

export { PAGINATION_PROPERTIES };
