import { swaggerUI } from "@hono/swagger-ui";
import { Scalar } from "@scalar/hono-api-reference";

import { LINK_SCHEMA } from "../../app/shared/entities/link";
import { LINK_VISIT_SCHEMA } from "../../app/shared/entities/link-visit";
import { USER_SCHEMA } from "../../app/shared/entities/user";
import { Server } from "./build-server";

const buildDocs = async (server: Server) => {
  server.get("/openapi", async (c) => {
    server.openAPIRegistry.register("Link", LINK_SCHEMA.openapi({ description: "Ссылка" }));
    server.openAPIRegistry.register("LinkVisit", LINK_VISIT_SCHEMA.openapi({ description: "Переход по ссылке" }));
    server.openAPIRegistry.register("User", USER_SCHEMA.openapi({ description: "Пользователь" }));

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
      responses: {
        400: {
          description: "Неверные входные данные",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["statusCode", "message"],
                properties: {
                  statusCode: { type: "number", example: 400 },
                  message: { type: "string", example: "Bad Request" },
                },
              },
            },
          },
        },
        404: {
          description: "Ресурс не найден",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["statusCode", "message"],
                properties: {
                  statusCode: { type: "number", example: 404 },
                  message: { type: "string", example: "Not Found" },
                },
              },
            },
          },
        },
        500: {
          description: "Неизвестная ошибка",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["statusCode", "message"],
                properties: {
                  statusCode: { type: "number", example: 500 },
                  message: { type: "string", example: "Internal Server Error" },
                },
              },
            },
          },
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
