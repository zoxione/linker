import { z } from "@hono/zod-openapi";

const PAGINATION_SCHEMA = z.object({
  limit: z.coerce.number().openapi({ type: "number" }),
  offset: z.coerce.number().openapi({ type: "number" }),
  count: z.coerce.number().openapi({ type: "number" }),
  total: z.coerce.number().openapi({ type: "number" }),
});

export { PAGINATION_SCHEMA };
