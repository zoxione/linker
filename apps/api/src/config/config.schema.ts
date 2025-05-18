import { z } from "@hono/zod-openapi";

const CONFIG_SCHEMA = z.object({
  production: z.number(),

  domainUrl: z.string(),

  apiAppUrl: z.string(),
  apiAppPort: z.number(),

  webAppUrl: z.string(),
  webAppPort: z.number(),

  databaseUrl: z.string(),

  betterAuthSecret: z.string(),
});

type Config = z.infer<typeof CONFIG_SCHEMA>;

export { CONFIG_SCHEMA, type Config };
