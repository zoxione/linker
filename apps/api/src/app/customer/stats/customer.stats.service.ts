import { and, eq, sql } from "drizzle-orm";
import { HTTPException } from "hono/http-exception";

import { dayjs } from "../../../lib/dayjs";
import { db, dbSchema } from "../../../persistence/db";
import { CustomerStatsGlobalResponse } from "./dto/customer.stats.global";
import { CustomerStatsGlobal } from "./dto/customer.stats.global-response";
import { CustomerStatsLinkVisits } from "./dto/customer.stats.link-visits";
import { CustomerStatsLinkVisitsResponse } from "./dto/customer.stats.link-visits-response copy";

class CustomerStatsService {
  constructor() {}

  #linkByIdAndUser(id: string, userId: string) {
    return and(eq(dbSchema.link.id, id), eq(dbSchema.link.userId, userId));
  }

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

  async linkVisits(dto: CustomerStatsLinkVisits): Promise<CustomerStatsLinkVisitsResponse> {
    const { id, userId, range } = dto;
    const today = dayjs().endOf("day");
    let from: Date;

    switch (range) {
      case "1w":
        from = today.subtract(1, "week").startOf("day").toDate();
        break;
      case "1m":
        from = today.subtract(1, "month").startOf("day").toDate();
        break;
      case "3m":
      default:
        from = today.subtract(3, "month").startOf("day").toDate();
        break;
    }

    const link = await db.query.link.findFirst({
      where: this.#linkByIdAndUser(id, userId),
    });
    if (!link) {
      throw new HTTPException(404, { message: "Ссылка не найдена" });
    }

    const result = await db
      .select({
        date: sql<string>`d::date`,
        value: sql<number>`coalesce(count(${dbSchema.linkVisit.id}), 0)`,
      })
      .from(sql`generate_series(${from}::date, ${today}::date, interval '1 day') as d`)
      .leftJoin(
        dbSchema.linkVisit,
        and(eq(dbSchema.linkVisit.linkId, id), sql`${dbSchema.linkVisit.createdAt}::date = d::date`),
      )
      .groupBy(sql`d::date`)
      .orderBy(sql`d::date`);

    return {
      items: result,
    };
  }
}

export { CustomerStatsService };
