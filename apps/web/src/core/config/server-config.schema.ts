import * as z from 'zod/v4';

const SERVER_CONFIG_SCHEMA = z.object({});

type ServerConfig = z.infer<typeof SERVER_CONFIG_SCHEMA>;

export { SERVER_CONFIG_SCHEMA, type ServerConfig };
