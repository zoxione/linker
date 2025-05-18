import { OpenAPIHono } from "@hono/zod-openapi";

import { Session, User } from "../../lib/auth";

const serveApi = () => {
  return new OpenAPIHono<{
    Variables: {
      user: User | null;
      session: Session | null;
    };
  }>();
};

export { serveApi };
