import { pinoLogger } from "hono-pino-logger";
import { cors } from "hono/cors";

import { config } from "../../config";
import { auth } from "../../lib/auth";
import { logger } from "../../lib/logger";
import { Server } from "./build-server";

const buildMiddlewares = async (server: Server) => {
  server.use("*", pinoLogger(logger));

  server.use(
    "*",
    cors({
      origin: config.webAppUrl,
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      exposeHeaders: ["Content-Length"],
      maxAge: 600,
      credentials: true,
    }),
  );

  server.use("*", async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers });

    if (!session) {
      c.set("user", null);
      c.set("session", null);
      return next();
    }

    c.set("user", session.user);
    c.set("session", session.session);

    return next();
  });
};

export { buildMiddlewares };
