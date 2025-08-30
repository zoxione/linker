import { z } from "zod";

import { userSchema } from "@/entities/user/model/user.schemas";

const updateUserFormSchema = userSchema.pick({
  email: true,
  name: true,
});

type UpdateUserFormSchema = z.infer<typeof updateUserFormSchema>;

export { updateUserFormSchema, type UpdateUserFormSchema };
