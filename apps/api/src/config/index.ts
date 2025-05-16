import { parseConfig } from "./parse-config";

const config = parseConfig({
  production: parseInt(process.env.PRODUCTION ?? "", 10),

  domainUrl: process.env.DOMAIN_URL,

  apiAppUrl: process.env.API_APP_URL,
  apiAppPort: parseInt(process.env.API_APP_PORT ?? "", 10),

  webAppUrl: process.env.WEB_APP_URL,
  webAppPort: parseInt(process.env.WEB_APP_PORT ?? "", 10),
});

export { config };
