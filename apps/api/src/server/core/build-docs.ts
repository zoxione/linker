import { swaggerUI } from "@hono/swagger-ui";
import { apiReference } from "@scalar/hono-api-reference";

import { Server } from "./build-server";

const buildDocs = async (server: Server) => {
  server.doc("/openapi", {
    openapi: "3.1.0",
    info: {
      title: "Linker API",
      version: "1.0.0",
    },
  });

  server.get("/swagger", swaggerUI({ url: "/openapi" }));

  server.get(
    "/docs",
    apiReference({
      pageTitle: "Linker API",
      spec: {
        url: "/openapi",
      },
    }),
  );
};

export { buildDocs };
