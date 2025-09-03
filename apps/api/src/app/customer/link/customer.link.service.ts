import { and, desc, eq, getTableColumns, sql } from "drizzle-orm";
import { HTTPException } from "hono/http-exception";
import { nanoid } from "nanoid";

import { dayjs } from "../../../lib/dayjs";
import { transformGetAllResult } from "../../../lib/utils/transform-get-all-result";
import { db, dbSchema } from "../../../persistence/db";
import { toCustomerLinkView } from "./customer.link.mappers";
import { CustomerLinkCreate } from "./dto/customer.link.create";
import { CustomerLinkDelete } from "./dto/customer.link.delete";
import { CustomerLinkGetAll } from "./dto/customer.link.get-all";
import { CustomerLinkGetOne } from "./dto/customer.link.get-one";
import { CustomerLinkList } from "./dto/customer.link.list";
import { CustomerLinkStats } from "./dto/customer.link.stats";
import { CustomerLinkStatsResponse } from "./dto/customer.link.stats-response";
import { CustomerLinkUpdate } from "./dto/customer.link.update";
import { CustomerLinkUpdateStatus } from "./dto/customer.link.update-status";
import { CustomerLinkView } from "./dto/customer.link.view";
import { CustomerLinkVisit } from "./dto/customer.link.visit";

class CustomerLinkService {
  constructor() {}

  #byIdAndUser(id: string, userId: string) {
    return and(eq(dbSchema.link.id, id), eq(dbSchema.link.userId, userId));
  }

  #generateToken(): string {
    const token = nanoid(10);
    return token;
  }

  async getAll(dto: CustomerLinkGetAll): Promise<CustomerLinkList> {
    const { userId, limit, offset } = dto;

    const result = await db
      .select({
        count: sql<string>`count(*) over()`,
        row: getTableColumns(dbSchema.link),
      })
      .from(dbSchema.link)
      .where(eq(dbSchema.link.userId, userId))
      .orderBy(desc(dbSchema.link.createdAt))
      .limit(limit)
      .offset(offset);

    const { items, total } = transformGetAllResult(result);

    return {
      limit,
      offset,
      count: items.length,
      total,
      items: items.map(toCustomerLinkView),
    };
  }

  async create(dto: CustomerLinkCreate): Promise<CustomerLinkView> {
    const token = this.#generateToken();

    const [link] = await db
      .insert(dbSchema.link)
      .values({
        status: "ENABLE",
        redirectCount: 0,
        token,
        ...dto,
      })
      .returning();
    if (!link) {
      throw new HTTPException(500, { message: "Не удалось создать ссылку" });
    }

    return toCustomerLinkView(link);
  }

  async getOne(dto: CustomerLinkGetOne): Promise<CustomerLinkView> {
    const { id, userId } = dto;

    const link = await db.query.link.findFirst({
      where: this.#byIdAndUser(id, userId),
    });
    if (!link) {
      throw new HTTPException(404, { message: "Ссылка не найдена" });
    }

    return toCustomerLinkView(link);
  }

  async update(dto: CustomerLinkUpdate): Promise<CustomerLinkView> {
    const { id, userId, ...updateDto } = dto;

    const [link] = await db
      .update(dbSchema.link)
      .set({ ...updateDto })
      .where(this.#byIdAndUser(id, userId))
      .returning();
    if (!link) {
      throw new HTTPException(404, { message: "Ссылка не найдена" });
    }

    return toCustomerLinkView(link);
  }

  async updateStatus(dto: CustomerLinkUpdateStatus): Promise<CustomerLinkView> {
    const { id, userId, ...updateDto } = dto;

    const [link] = await db
      .update(dbSchema.link)
      .set({ ...updateDto })
      .where(this.#byIdAndUser(id, userId))
      .returning();
    if (!link) {
      throw new HTTPException(404, { message: "Ссылка не найдена" });
    }

    return toCustomerLinkView(link);
  }

  async delete(dto: CustomerLinkDelete): Promise<void> {
    const { id, userId } = dto;

    await db.delete(dbSchema.link).where(this.#byIdAndUser(id, userId));
  }

  async visit(dto: CustomerLinkVisit): Promise<CustomerLinkView | null> {
    const { token, ...linkVisitDto } = dto;

    const [link] = await db
      .update(dbSchema.link)
      .set({
        redirectCount: sql`${dbSchema.link.redirectCount} + 1`,
      })
      .where(and(eq(dbSchema.link.token, token), eq(dbSchema.link.status, "ENABLE")))
      .returning();
    if (!link) {
      return null;
    }

    await db.insert(dbSchema.linkVisit).values({
      linkId: link.id,
      ...linkVisitDto,
    });

    return toCustomerLinkView(link);
  }

  async stats(dto: CustomerLinkStats): Promise<CustomerLinkStatsResponse> {
    const { id, userId, range } = dto;
    const yesterday = dayjs().subtract(1, "day").endOf("day");
    let from: Date;

    switch (range) {
      case "1w":
        from = yesterday.subtract(1, "week").startOf("day").toDate();
        break;
      case "1m":
        from = yesterday.subtract(1, "month").startOf("day").toDate();
        break;
      case "3m":
      default:
        from = yesterday.subtract(3, "month").startOf("day").toDate();
        break;
    }

    const link = await db.query.link.findFirst({
      where: this.#byIdAndUser(id, userId),
    });
    if (!link) {
      throw new HTTPException(404, { message: "Ссылка не найдена" });
    }

    const result = await db
      .select({
        date: sql<string>`d::date`,
        value: sql<number>`coalesce(count(${dbSchema.linkVisit.id}), 0)`,
      })
      .from(sql`generate_series(${from}::date, ${yesterday}::date, interval '1 day') as d`)
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

export { CustomerLinkService };
