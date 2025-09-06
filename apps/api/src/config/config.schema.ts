import { z } from "@hono/zod-openapi";

const CONFIG_SCHEMA = z.object({
  production: z.string(),

  domainUrl: z.string(),

  apiAppUrl: z.string(),
  apiAppPort: z.string(),

  webAppUrl: z.string(),
  webAppPort: z.string(),

  databaseUrl: z.string(),

  betterAuthSecret: z.string(),

  githubClientId: z.string(),
  githubClientSecret: z.string(),

  googleClientId: z.string(),
  googleClientSecret: z.string(),
});

type Config = z.infer<typeof CONFIG_SCHEMA>;

export { CONFIG_SCHEMA, type Config };
