"use client";

import { QUERY_KEYS } from "@/core/data/constants";
import { DataTable } from "@/features/shared/data-table";
import { useGetApiCustomerLinks } from "@/shared/api";

import { linksTableColumns } from "./links-table.columns";

interface LinksTableProps {}

const LinksTable = ({}: LinksTableProps) => {
  return (
    <DataTable
      columns={linksTableColumns}
      // TODO: Убрать never
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      useQuery={useGetApiCustomerLinks as any}
      queryKey={[QUERY_KEYS.LINKS]}
      filter={{}}
      defaultLimit={100}
    />
  );
};

export { LinksTable };
