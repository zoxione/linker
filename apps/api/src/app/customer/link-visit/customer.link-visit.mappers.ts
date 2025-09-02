import { LinkVisit } from "../../../persistence/db";
import { CustomerLinkVisitView } from "./dto/customer.link-visit.view";

const toCustomerLinkVisitView = (link: LinkVisit): CustomerLinkVisitView => {
  const { id, linkId, ip, language, browser, cpu, device, engine, os, referer, headers, updatedAt, createdAt } = link;

  return {
    id,
    linkId,
    ip,
    language,
    browser,
    cpu,
    device,
    engine,
    os,
    referer,
    headers,
    updatedAt: updatedAt.toISOString(),
    createdAt: createdAt.toISOString(),
  };
};

export { toCustomerLinkVisitView };
