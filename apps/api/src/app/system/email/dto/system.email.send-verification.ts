import { z } from "@hono/zod-openapi";

const SYSTEM_EMAIL_SEND_VERIFICATION = z.object({
  email: z.string(),
  otp: z.string(),
});

type SystemEmailSendVerification = z.infer<typeof SYSTEM_EMAIL_SEND_VERIFICATION>;

export { SYSTEM_EMAIL_SEND_VERIFICATION, type SystemEmailSendVerification };
