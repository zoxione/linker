import { CustomerLinkService } from "./link/customer.link.service";

const customerDomain = {
  link: new CustomerLinkService(),
} as const;

export { customerDomain };
