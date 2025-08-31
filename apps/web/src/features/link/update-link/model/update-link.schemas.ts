import { z } from "zod";

import { linkSchema } from "@/entities/link/model/link.schemas";

const updateLinkFormSchema = linkSchema.pick({
  name: true,
  redirectUrl: true,
  url: true,
  createdAt: true,
});

type UpdateLinkFormSchema = z.infer<typeof updateLinkFormSchema>;

export { updateLinkFormSchema, type UpdateLinkFormSchema };
