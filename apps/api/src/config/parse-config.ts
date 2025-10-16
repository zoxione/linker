import { CONFIG_SCHEMA, Config } from "./config.schema";

const parseConfig = (data: unknown): Config => {
  return CONFIG_SCHEMA.parse(data);
};

export { parseConfig };
