import { eq, sql } from "drizzle-orm";
import { HTTPException } from "hono/http-exception";
import { nanoid } from "nanoid";

import { transformGetAllResult } from "../../../lib/utils/transform-get-all-result";
import { db, dbSchema, Link } from "../../../persistence/db";
import { toCustomerLinkView } from "./customer.link.mappers";
import { CustomerLinkCreate } from "./dto/customer.link.create";
import { CustomerLinkDelete } from "./dto/customer.link.delete";
import { CustomerLinkGetAll } from "./dto/customer.link.get-all";
import { CustomerLinkGetOne } from "./dto/customer.link.get-one";
import { CustomerLinkList } from "./dto/customer.link.list";
import { CustomerLinkUpdate } from "./dto/customer.link.update";
import { CustomerLinkUpdateStatus } from "./dto/customer.link.update-status";
import { CustomerLinkView } from "./dto/customer.link.view";

class CustomerLinkService {
  constructor() {}

  async #checkExists(id: string): Promise<Link> {
    const link = await db.query.link.findFirst({
      where: eq(dbSchema.link.id, id),
    });
    if (!link) {
      throw new HTTPException(404, { message: "Ссылка не найдена" });
    }
    return link;
  }

  #generateToken(): string {
    const token = nanoid(10);
    return token;
  }

  async getAll(dto: CustomerLinkGetAll): Promise<CustomerLinkList> {
    const { limit, offset } = dto;

    const result = await db
      .select({ row: dbSchema.link, count: sql<number>`count(*) over()` })
      .from(dbSchema.link)
      .limit(limit)
      .offset(offset);

    const { items, total } = transformGetAllResult(result);

    return {
      limit,
      offset,
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
    const { id } = dto;

    const link = await this.#checkExists(id);

    return toCustomerLinkView(link);
  }

  async update(dto: CustomerLinkUpdate): Promise<CustomerLinkView> {
    const { id, ...updateDto } = dto;

    await this.#checkExists(id);

    const [link] = await db
      .update(dbSchema.link)
      .set({ ...updateDto })
      .where(eq(dbSchema.link.id, id))
      .returning();
    if (!link) {
      throw new HTTPException(500, { message: "Не удалось обновить ссылку" });
    }

    return toCustomerLinkView(link);
  }

  async updateStatus(dto: CustomerLinkUpdateStatus): Promise<CustomerLinkView> {
    const { id, ...updateDto } = dto;

    await this.#checkExists(id);

    const [link] = await db
      .update(dbSchema.link)
      .set({ ...updateDto })
      .where(eq(dbSchema.link.id, id))
      .returning();
    if (!link) {
      throw new HTTPException(500, { message: "Не удалось обновить ссылку" });
    }

    return toCustomerLinkView(link);
  }

  async delete(dto: CustomerLinkDelete): Promise<void> {
    const { id } = dto;

    await this.#checkExists(id);

    await db.delete(dbSchema.link).where(eq(dbSchema.link.id, id));
  }
}

export { CustomerLinkService };
