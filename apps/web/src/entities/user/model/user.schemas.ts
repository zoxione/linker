import { z } from "zod";

import { USER_SCHEMA } from "@repo/api";

const userSchema = z.object({
  ...USER_SCHEMA.shape,
  otp: z.string({ error: "Поле должно быть строкой" }).trim(),
});

type UserSchema = z.infer<typeof userSchema>;

export { userSchema, type UserSchema };
