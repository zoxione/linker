import { customerDomain } from "./customer";
import { systemDomain } from "./system";

const app = {
  system: systemDomain,
  customer: customerDomain,
} as const;

export { app };
