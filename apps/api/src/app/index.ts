import { customerDomain } from "./customer";

const app = {
  customer: customerDomain,
} as const;

export { app };
