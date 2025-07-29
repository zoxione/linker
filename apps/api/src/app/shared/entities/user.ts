import { z } from "@hono/zod-openapi";

import { BASE_ENTITY_SCHEMA } from "../base-entity";

const USER_SCHEMA = z.object({
  ...BASE_ENTITY_SCHEMA.shape,
  id: z.string({ error: "Поле должно быть строкой" }).trim(),
  email: z.email({ error: "Неверный формат email" }),
  emailVerified: z.boolean({ error: "Поле должно быть булевым значением" }),
  name: z
    .string({ error: "Поле должно быть строкой" })
    .trim()
    .min(3, { error: "Минимальное количество символов - 3" })
    .max(24, { error: "Максимальное количество символов - 24" }),
  image: z.url({ error: "Поле должно быть корректным URL" }).nullable(),
});

export { USER_SCHEMA };
