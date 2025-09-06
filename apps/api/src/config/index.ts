import { parseConfig } from "./parse-config";

const parsedConfig = parseConfig({
  production: process.env.PRODUCTION,

  domainUrl: process.env.DOMAIN_URL,

  apiAppUrl: process.env.API_APP_URL,
  apiAppPort: process.env.API_APP_PORT,

  webAppUrl: process.env.WEB_APP_URL,
  webAppPort: process.env.WEB_APP_PORT,

  databaseUrl: process.env.DATABASE_URL,

  betterAuthSecret: process.env.BETTER_AUTH_SECRET,

  githubClientId: process.env.GITHUB_CLIENT_ID,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET,

  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
});

const config = {
  ...parsedConfig,
  production: parsedConfig.production === "1",
  apiAppPort: parseInt(parsedConfig.apiAppPort, 10),
  webAppPort: parseInt(parsedConfig.webAppPort, 10),
};

export { config };
