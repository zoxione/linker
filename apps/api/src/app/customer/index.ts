import { CustomerLinkVisitService } from "./link-visit/customer.link-visit.service";
import { CustomerLinkService } from "./link/customer.link.service";
import { CustomerStatsService } from "./stats/customer.stats.service";

const customerDomain = {
  link: new CustomerLinkService(),
  linkVisit: new CustomerLinkVisitService(),
  stats: new CustomerStatsService(),
} as const;

export { customerDomain };
