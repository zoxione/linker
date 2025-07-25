import { swaggerUI } from "@hono/swagger-ui";
import { Scalar } from "@scalar/hono-api-reference";

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
    Scalar({
      pageTitle: "Linker API",
      url: "/openapi",
    }),
  );
};

export { buildDocs };
