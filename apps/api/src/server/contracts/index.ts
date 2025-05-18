import { middlewares } from "./middlewares";
import { serveApi } from "./serve-api";
import { tags } from "./tags";

const contracts = {
  tags,
  serveApi,
  middlewares,
} as const;

export { contracts };
