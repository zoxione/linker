import { config } from "../../config";
import { contracts } from "../contracts";
import { buildDocs } from "./build-docs";
import { buildErrors } from "./build-errors";
import { buildMiddlewares } from "./build-middlewares";
import { buildRoutes } from "./build-routes";

const buildServer = async () => {
  const server = contracts.serveApi();

  await buildMiddlewares(server);
  await buildErrors(server);
  if (config.production === 0) {
    await buildDocs(server);
  }
  await buildRoutes(server);

  return server;
};

type Server = Awaited<ReturnType<typeof buildServer>>;

export { buildServer, type Server };
