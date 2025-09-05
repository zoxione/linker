import { z } from "@hono/zod-openapi";

import { BASE_ENTITY_SCHEMA } from "../base-entity";

const LINK_STATUS_SCHEMA = z.enum(["ENABLE", "DISABLE"]);

const LINK_SCHEMA = z.object({
  ...BASE_ENTITY_SCHEMA.shape,
  id: z.uuid({ error: "Поле должно быть UUID" }),
  userId: z.uuid({ error: "Поле должно быть UUID" }),
  status: LINK_STATUS_SCHEMA,
  name: z
    .string({ error: "Поле должно быть строкой" })
    .trim()
    .min(3, { error: "Минимальное количество символов - 3" })
    .max(24, { error: "Максимальное количество символов - 24" }),
  token: z.string({ error: "Поле должно быть строкой" }).trim(),
  redirectUrl: z.url({ error: "Поле должно быть корректным URL" }),
  redirectCount: z.coerce.number({ error: "Поле должно быть числом" }).openapi({ type: "number" }),
  url: z.url({ error: "Поле должно быть корректным URL" }),
});

export { LINK_SCHEMA };
