import { serve } from "@hono/node-server";

import { config } from "../config";
import { logger } from "../lib/logger";
import { buildServer } from "./core/build-server";

const startApiServer = async () => {
  const server = await buildServer();

  serve(
    {
      fetch: server.fetch,
      port: config.apiAppPort,
    },
    (info) => {
      logger.info(`Server is running on ${info.port} port`);
    },
  );
};

startApiServer();
