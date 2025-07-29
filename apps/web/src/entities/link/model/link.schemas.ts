import { z } from "zod";

import { LINK_SCHEMA } from "@repo/api";

const linkSchema = z.object({
  ...LINK_SCHEMA.shape,
});

type LinkSchema = z.infer<typeof linkSchema>;

export { linkSchema, type LinkSchema };
