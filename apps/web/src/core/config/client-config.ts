import { CLIENT_CONFIG_SCHEMA } from "./client-config.schema";

const parsedClientConfig = CLIENT_CONFIG_SCHEMA.parse({
  production: process.env.PRODUCTION,
  apiAppUrl: process.env.API_APP_URL,
  webAppUrl: process.env.WEB_APP_URL,
});

const clientConfig = {
  ...parsedClientConfig,
  production: parsedClientConfig.production === "1",
};

export { clientConfig };
