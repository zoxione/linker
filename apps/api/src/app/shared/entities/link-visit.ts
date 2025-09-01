import { z } from "@hono/zod-openapi";

import { BASE_ENTITY_SCHEMA } from "../base-entity";

const LINK_VISIT_SCHEMA = z.object({
  ...BASE_ENTITY_SCHEMA.shape,
  id: z.string({ error: "Поле должно быть строкой" }).trim(),
  linkId: z.string({ error: "Поле должно быть строкой" }).trim(),
  ip: z.string({ error: "Поле должно быть строкой" }).trim().nullable(),
  language: z.string({ error: "Поле должно быть строкой" }).trim().nullable(),
  browser: z.string({ error: "Поле должно быть строкой" }).trim().nullable(),
  cpu: z.string({ error: "Поле должно быть строкой" }).trim().nullable(),
  device: z.string({ error: "Поле должно быть строкой" }).trim().nullable(),
  engine: z.string({ error: "Поле должно быть строкой" }).trim().nullable(),
  os: z.string({ error: "Поле должно быть строкой" }).trim().nullable(),
  referer: z.string({ error: "Поле должно быть строкой" }).trim().nullable(),
  headers: z.string({ error: "Поле должно быть строкой" }).trim(),
});

export { LINK_VISIT_SCHEMA };
