import { and, asc, desc, eq, getTableColumns, sql } from "drizzle-orm";

import { transformGetAllResult } from "../../../lib/utils/transform-get-all-result";
import { db, dbSchema } from "../../../persistence/db";
import { toCustomerLinkVisitView } from "./customer.link-visit.mappers";
import { CustomerLinkVisitGetAll } from "./dto/customer.link-visit.get-all";
import { CustomerLinkVisitList } from "./dto/customer.link-visit.list";

class CustomerLinkVisitService {
  constructor() {}

  async getAll(dto: CustomerLinkVisitGetAll): Promise<CustomerLinkVisitList> {
    const { userId, linkId, limit, offset, sortBy, sortOrder } = dto;

    const whereQuery = and(eq(dbSchema.link.userId, userId), linkId ? eq(dbSchema.link.id, linkId) : undefined);
    const orderByQuery =
      sortBy && sortOrder
        ? sortOrder === "asc"
          ? asc(dbSchema.linkVisit[sortBy])
          : desc(dbSchema.linkVisit[sortBy])
        : desc(dbSchema.linkVisit.createdAt);

    const result = await db
      .select({
        count: sql<string>`count(*) over()`,
        row: {
          ...getTableColumns(dbSchema.linkVisit),
          linkName: dbSchema.link.name,
        },
      })
      .from(dbSchema.linkVisit)
      .innerJoin(dbSchema.link, eq(dbSchema.link.id, dbSchema.linkVisit.linkId))
      .where(whereQuery)
      .orderBy(orderByQuery)
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
