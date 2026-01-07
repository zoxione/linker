import * as z from "zod/v4";

const CLIENT_CONFIG_SCHEMA = z.object({
  production: z.string(),
  apiAppUrl: z.string(),
  webAppUrl: z.string(),
});

type ClientConfig = z.infer<typeof CLIENT_CONFIG_SCHEMA>;

export { CLIENT_CONFIG_SCHEMA, type ClientConfig };
