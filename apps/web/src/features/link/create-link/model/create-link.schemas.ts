import { z } from "zod";

import { linkSchema } from "@/entities/link/model/link.schemas";

const createLinkFormSchema = linkSchema.pick({
  name: true,
  redirectUrl: true,
});

type CreateLinkFormSchema = z.infer<typeof createLinkFormSchema>;

export { createLinkFormSchema, type CreateLinkFormSchema };
