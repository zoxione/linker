import { auth } from "../../lib/auth";
import { customerRouter } from "../domain/customer";
import { Server } from "./build-server";

const buildRoutes = async (server: Server) => {
  server.get("/", (c) => {
    return c.json({ message: "Это сервер для Linker" });
  });

  server.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

  server.route("/api/customer", customerRouter);
};

export { buildRoutes };
