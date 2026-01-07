import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { config } from "../../config";
import * as dbSchema from "./schema";

const pool = new Pool({
  connectionString: config.databaseUrl,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const db = drizzle({
  client: pool,
  schema: dbSchema,
});

type User = typeof dbSchema.user.$inferSelect;
type Session = typeof dbSchema.session.$inferSelect;
type Account = typeof dbSchema.account.$inferSelect;
type Verification = typeof dbSchema.verification.$inferSelect;
type Link = typeof dbSchema.link.$inferSelect;
type LinkVisit = typeof dbSchema.linkVisit.$inferSelect;

export { db, dbSchema, type Account, type Link, type LinkVisit, type Session, type User, type Verification };
