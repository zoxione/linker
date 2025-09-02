"use client";

import { QUERY_KEYS } from "@/core/data/constants";
import { DataTable } from "@/features/shared/data-table";
import { useGetApiCustomerLinkVisits } from "@/shared/api";

import { linkVisitsTableColumns } from "./link-visits-table.columns";

interface LinkVisitsTableProps {}

const LinkVisitsTable = ({}: LinkVisitsTableProps) => {
  return (
    <DataTable
      columns={linkVisitsTableColumns}
      useQuery={useGetApiCustomerLinkVisits}
      queryKey={[QUERY_KEYS.LINK_VISITS]}
      filter={{}}
      defaultLimit={100}
    />
  );
};

export { LinkVisitsTable };
