import { drizzle } from "drizzle-orm/node-postgres";

import { config } from "../../config";

const db = drizzle({
  connection: {
    connectionString: config.databaseUrl,
  },
});

export { db };
