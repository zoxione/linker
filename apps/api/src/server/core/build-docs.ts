import { swaggerUI } from "@hono/swagger-ui";
import { Scalar } from "@scalar/hono-api-reference";

import { Server } from "./build-server";

const buildDocs = async (server: Server) => {
  server.get("/openapi", async (c) => {
    const openApiDoc = server.getOpenAPI31Document({
      openapi: "3.1.0",
      info: {
        title: "Linker API",
        version: "1.0.0",
      },
    });

    openApiDoc.components = {
      ...openApiDoc.components,
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "better-auth.session_token",
          description: "Session token cookie for authentication",
        },
      },
    };

    openApiDoc.security = [
      {
        cookieAuth: [],
      },
    ];

    return c.json(openApiDoc);
  });

  server.get(
    "/swagger",
    swaggerUI({
      url: "/openapi",
      docExpansion: "none",
    }),
  );

  server.get(
    "/docs",
    Scalar({
      pageTitle: "Linker API",
      url: "/openapi",
    }),
  );
};

export { buildDocs };
