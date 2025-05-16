import { serveApi } from "./serve-api";
import { tags } from "./tags";

const contracts = {
  tags,
  serveApi,
} as const;

export { contracts };
