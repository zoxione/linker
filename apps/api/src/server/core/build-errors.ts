import { HTTPException } from "hono/http-exception";

import { Server } from "./build-server";

const buildErrors = async (server: Server) => {
  server.onError(async (error, c) => {
    if (error instanceof HTTPException) {
      return c.json(
        {
          statusCode: error.status,
          message: error.message,
        },
        { status: error.status },
      );
    }
    return c.json(
      {
        statusCode: 500,
        message: "Ой, что-то пошло не так",
      },
      { status: 500 },
    );
  });
};

export { buildErrors };
