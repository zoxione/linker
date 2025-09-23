"use client";

import { useMemo } from "react";

import { QUERY_KEYS } from "@/core/data/constants";
import { DataTable } from "@/features/shared/data-table";
import { useGetApiCustomerLinks } from "@/shared/api";

import { createLinksTableColumns } from "./links-table.columns";

interface LinksTableProps {}

const LinksTable = ({}: LinksTableProps) => {
  const linksTableColumns = useMemo(() => createLinksTableColumns({}), []);

  return (
    <DataTable
      columns={linksTableColumns}
      // TODO: Убрать any
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      useQuery={useGetApiCustomerLinks as any}
      queryKey={[QUERY_KEYS.LINKS]}
      filter={{}}
      manualFiltering
      manualSorting
      defaultLimit={100}
    />
  );
};

export { LinksTable };
