import { drizzle } from "drizzle-orm/node-postgres";

import { config } from "../../config";
import * as dbSchema from "./schema";

const db = drizzle({
  connection: {
    connectionString: config.databaseUrl,
  },
  schema: dbSchema,
});

type User = typeof dbSchema.user.$inferSelect;
type Session = typeof dbSchema.session.$inferSelect;
type Account = typeof dbSchema.account.$inferSelect;
type Verification = typeof dbSchema.verification.$inferSelect;
type Link = typeof dbSchema.link.$inferSelect;

export { db, dbSchema, type Account, type Link, type Session, type User, type Verification };
