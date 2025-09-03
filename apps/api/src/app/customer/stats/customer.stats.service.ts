import { eq, sql } from "drizzle-orm";

import { db, dbSchema } from "../../../persistence/db";
import { CustomerStatsGlobalResponse } from "./dto/customer.stats.global";
import { CustomerStatsGlobal } from "./dto/customer.stats.global-response";

class CustomerStatsService {
  constructor() {}

  async global(dto: CustomerStatsGlobal): Promise<CustomerStatsGlobalResponse> {
    const { userId } = dto;

    const totalLinksResult = await db
      .select({ count: sql<string>`count(*)` })
      .from(dbSchema.link)
      .where(eq(dbSchema.link.userId, userId));

    const totalLinks = Number(totalLinksResult[0]?.count ?? 0);

    const totalLinkVisitsResult = await db
      .select({ count: sql<string>`count(*)` })
      .from(dbSchema.linkVisit)
      .innerJoin(dbSchema.link, eq(dbSchema.link.id, dbSchema.linkVisit.linkId))
      .where(eq(dbSchema.link.userId, userId));

    const totalLinkVisits = Number(totalLinkVisitsResult[0]?.count ?? 0);

    return {
      totalLinks,
      totalLinkVisits,
    };
  }
}

export { CustomerStatsService };
