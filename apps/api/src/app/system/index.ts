import { SystemEmailService } from "./email/system.email.service";

const systemDomain = {
  email: new SystemEmailService(),
} as const;

export { systemDomain };
