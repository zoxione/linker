import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";

import { Session, User } from "../../lib/auth";

const createAuthMiddleware = () =>
  createMiddleware<{
    Variables: {
      user: User;
      session: Session;
    };
  }>(async (c, next) => {
    const session = c.get("session");
    const user = c.get("user");

    if (!session || !user) {
      throw new HTTPException(401, { message: "Не авторизован" });
    }

    return await next();
  });

const middlewares = {
  auth: createAuthMiddleware(),
};

export { middlewares };
