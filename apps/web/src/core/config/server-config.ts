import { SERVER_CONFIG_SCHEMA } from './server-config.schema';

const parsedServerConfig = SERVER_CONFIG_SCHEMA.parse({});

const serverConfig = {
  ...parsedServerConfig,
};

export { serverConfig };
