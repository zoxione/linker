import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/persistence/db/migrations",
  schema: "./src/persistence/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    // @ts-ignore
    url: process.env.DATABASE_URL!,
  },
});
