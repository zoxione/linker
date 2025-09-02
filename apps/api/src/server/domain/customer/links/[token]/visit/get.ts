import acceptLanguage from "accept-language";
import { UAParser } from "ua-parser-js";

import { createRoute } from "@hono/zod-openapi";

import { app } from "../../../../../../app";
import { CUSTOMER_LINK_VISIT } from "../../../../../../app/customer/link/dto/customer.link.visit";
import { contracts } from "../../../../../contracts";

const contract = createRoute({
  method: "get",
  path: "/{token}/visit",
  tags: [contracts.tags.CUSTOMER_LINK],
  summary: "Посетить ссылку по token",
  request: {
    params: CUSTOMER_LINK_VISIT.pick({ token: true }),
  },
  responses: {
    302: {
      description: "Перенаправление на целевую страницу",
    },
    400: {
      $ref: "#/components/responses/400",
    },
    404: {
      $ref: "#/components/responses/404",
    },
    500: {
      $ref: "#/components/responses/500",
    },
  },
});

const customerLinksTokenVisitGetRoute = contracts.serveApi().openapi(contract, async (c) => {
  const { token } = c.req.valid("param");

  const ip = c.req.header("x-forwarded-for")?.split(",")[0]?.trim() || c.req.header("x-real-ip") || null;

  acceptLanguage.languages(["ru"]);
  const language = acceptLanguage.get(c.req.header("accept-language")) || null;

  const uap = new UAParser(c.req.header("user-agent"));
  const browser = uap.getBrowser().name ? uap.getBrowser().toString() : null;
  const cpu = uap.getCPU().architecture ? uap.getCPU().toString() : null;
  const device = uap.getDevice().model ? uap.getDevice().toString() : null;
  const engine = uap.getEngine().name ? uap.getEngine().toString() : null;
  const os = uap.getOS().name ? uap.getOS().toString() : null;

  const referer = c.req.header("referer") || null;

  const link = await app.customer.link.visit({
    token,
    ip,
    language,
    browser,
    cpu,
    device,
    engine,
    os,
    referer,
    headers: JSON.stringify(Object.fromEntries(Object.entries(c.req.header()))),
  });
  if (!link) {
    return c.notFound();
  }

  return c.redirect(link.redirectUrl);
});

export { customerLinksTokenVisitGetRoute };
