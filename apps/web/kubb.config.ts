import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginReactQuery } from "@kubb/plugin-react-query";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginZod } from "@kubb/plugin-zod";

import { config } from "./src/core/config";

const kubbConfig = defineConfig(() => {
  return {
    root: ".",
    input: {
      path: `${config.apiAppUrl}/openapi`,
    },
    output: {
      path: "./src/shared/api",
      clean: true,
      defaultBanner: false,
      extension: {},
    },
    plugins: [
      pluginOas({}),
      pluginZod({
        output: {
          path: "./zod",
          banner: "/* eslint-disable */ \n // @ts-nocheck",
        },
        group: {
          type: "tag",
          name: ({ group }) => `${group}`,
        },
      }),
      pluginTs({
        output: {
          path: "./types",
          banner: "/* eslint-disable */ \n // @ts-nocheck",
        },
        group: {
          type: "tag",
          name: ({ group }) => `${group}`,
        },
        enumType: "literal",
      }),
      pluginReactQuery({
        output: {
          path: "./hooks",
          banner: "/* eslint-disable */ \n // @ts-nocheck",
        },
        group: {
          type: "tag",
          name: ({ group }) => `${group}`,
        },
        client: {
          importPath: "../../../lib/fetch-client",
          dataReturnType: "data",
        },
        query: {
          methods: ["get"],
        },
        mutation: {
          methods: ["post", "put", "patch", "delete"],
        },
      }),
    ],
  };
});

export default kubbConfig;
