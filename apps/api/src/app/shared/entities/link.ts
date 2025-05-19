import { z } from "@hono/zod-openapi";

import { BASE_ENTITY_PROPERTIES } from "../base-entity";

const LINK_STATUS_SCHEMA = z.enum(["ENABLE", "DISABLE"]);

const LINK_SCHEMA = z
  .object({
    id: z.string({ message: "Поле должно быть строкой" }),
    userId: z.string({ message: "Поле должно быть строкой" }),
    status: LINK_STATUS_SCHEMA,
    name: z
      .string({ message: "Поле должно быть строкой" })
      .min(3, { message: "Минимальное количество символов - 3" })
      .max(24, { message: "Максимальное количество символов - 24" }),
    token: z.string({ message: "Поле должно быть строкой" }),
    redirectUrl: z.string({ message: "Поле должно быть строкой" }).url({
      message: "Поле должно быть корректным URL",
    }),
    redirectCount: z.number({ message: "Поле должно быть числом" }),
  })
  .merge(BASE_ENTITY_PROPERTIES);

export { LINK_SCHEMA };
