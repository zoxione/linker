import { OpenAPIHono } from "@hono/zod-openapi";

const serveApi = () => {
  return new OpenAPIHono();
};

export { serveApi };
