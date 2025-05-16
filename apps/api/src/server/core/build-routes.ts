import { Server } from "./build-server";

const buildRoutes = async (server: Server) => {
  server.get("/", (c) => {
    return c.json({ message: "Это сервер для Linker" });
  });
};

export { buildRoutes };
