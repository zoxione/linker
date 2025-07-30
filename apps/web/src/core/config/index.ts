import { parseConfig } from "./parse-config";

const parsedConfig = parseConfig({
  production: process.env.PRODUCTION,
  apiAppUrl: process.env.API_APP_URL,
  webAppUrl: process.env.WEB_APP_URL,
});

const config = {
  ...parsedConfig,
  production: parsedConfig.production === "1",
};

export { config };
