import { z } from "zod";

import { LINK_SCHEMA } from "@repo/api";

const linkSchema = LINK_SCHEMA;

type LinkSchema = z.infer<typeof linkSchema>;

export { linkSchema, type LinkSchema };
