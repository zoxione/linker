import { z } from "zod";

import { LINK_VISIT_SCHEMA } from "@repo/api";

const linkVisitSchema = z.object({
  ...LINK_VISIT_SCHEMA.shape,
});

type LinkVisitSchema = z.infer<typeof linkVisitSchema>;

export { linkVisitSchema, type LinkVisitSchema };
