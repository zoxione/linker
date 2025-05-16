import { serve } from "@hono/node-server";

import { config } from "../config";
import { buildServer } from "./core/build-server";

const startApiServer = async () => {
  const server = await buildServer();

  serve(
    {
      fetch: server.fetch,
      port: config.apiAppPort,
    },
    (info) => {
      console.log(`Server is running on ${info.port} port`);
    },
  );
};

startApiServer();
