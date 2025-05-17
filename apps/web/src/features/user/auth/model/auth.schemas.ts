import { z } from "zod";

import { userSchema } from "@/entities/user/model/user.schemas";

const authEmailFormSchema = userSchema.pick({
  email: true,
});

type AuthEmailFormSchema = z.infer<typeof authEmailFormSchema>;

const authOtpFormSchema = userSchema.pick({
  otp: true,
});

type AuthOtpFormSchema = z.infer<typeof authOtpFormSchema>;

export { authEmailFormSchema, authOtpFormSchema, type AuthEmailFormSchema, type AuthOtpFormSchema };
