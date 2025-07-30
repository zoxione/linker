import { z } from "zod";

const CONFIG_SCHEMA = z.object({
  production: z.string(),
  apiAppUrl: z.string(),
  webAppUrl: z.string(),
});

type Config = z.infer<typeof CONFIG_SCHEMA>;

export { CONFIG_SCHEMA, type Config };
