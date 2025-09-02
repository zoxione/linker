import { CustomerLinkVisitService } from "./link-visit/customer.link-visit.service";
import { CustomerLinkService } from "./link/customer.link.service";

const customerDomain = {
  link: new CustomerLinkService(),
  linkVisit: new CustomerLinkVisitService(),
} as const;

export { customerDomain };
