import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginReactQuery } from "@kubb/plugin-react-query";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginZod } from "@kubb/plugin-zod";

const kubbConfig: any = defineConfig(() => {
  return {
    root: ".",
    input: {
      path: `${process.env.API_APP_URL}/openapi`,
    },
    output: {
      path: "./src/shared/api",
      clean: true,
      extension: {},
    },
    plugins: [
      pluginOas({}),
      pluginZod({
        output: {
          path: "./zod",
        },
        group: {
          type: "tag",
          name: ({ group }) => `${group}`,
        },
      }),
      pluginTs({
        output: {
          path: "./types",
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
        },
        group: {
          type: "tag",
          name: ({ group }) => `${group}`,
        },
        // parser: "zod",
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
