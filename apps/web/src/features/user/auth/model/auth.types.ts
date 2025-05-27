import { AuthEmailFormSchema, AuthOtpFormSchema } from "./auth.schemas";

type AuthFormStep = "email" | "otp";

type AuthFormData = AuthEmailFormSchema & AuthOtpFormSchema;

export { type AuthFormData, type AuthFormStep };
