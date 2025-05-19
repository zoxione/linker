import { defineConfig } from "drizzle-kit";

import { config } from "./src/config";

export default defineConfig({
  out: "./src/persistence/db/migrations",
  schema: "./src/persistence/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: config.databaseUrl,
  },
});
