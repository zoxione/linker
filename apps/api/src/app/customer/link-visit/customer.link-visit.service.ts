import { desc, eq, sql } from "drizzle-orm";

import { transformGetAllResult } from "../../../lib/utils/transform-get-all-result";
import { db, dbSchema } from "../../../persistence/db";
import { toCustomerLinkVisitView } from "./customer.link-visit.mappers";
import { CustomerLinkVisitGetAll } from "./dto/customer.link-visit.get-all";
import { CustomerLinkVisitList } from "./dto/customer.link-visit.list";

class CustomerLinkVisitService {
  constructor() {}

  async getAll(dto: CustomerLinkVisitGetAll): Promise<CustomerLinkVisitList> {
    const { userId, limit, offset } = dto;

    const result = await db
      .select({ row: dbSchema.linkVisit, count: sql<number>`count(*) over()` })
      .from(dbSchema.linkVisit)
      .innerJoin(dbSchema.link, eq(dbSchema.link.id, dbSchema.linkVisit.linkId))
      .where(eq(dbSchema.link.userId, userId))
      .orderBy(desc(dbSchema.linkVisit.createdAt))
      .limit(limit)
      .offset(offset);

    const { items, total } = transformGetAllResult(result);

    return {
      limit,
      offset,
      count: items.length,
      total,
      items: items.map(toCustomerLinkVisitView),
    };
  }
}

export { CustomerLinkVisitService };
