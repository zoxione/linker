"use client";

import { QUERY_KEYS } from "@/core/data/constants";
import { Link } from "@/entities/link/model/link.types";
import { DataTable } from "@/features/shared/data-table";
import { useGetApiCustomerLinkVisits } from "@/shared/api";

import { linkVisitsTableColumns } from "./link-visits-table.columns";

interface LinkVisitsTableProps {
  linkId?: Link["id"];
}

const LinkVisitsTable = ({ linkId }: LinkVisitsTableProps) => {
  return (
    <DataTable
      columns={linkVisitsTableColumns}
      // TODO: Убрать any
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      useQuery={useGetApiCustomerLinkVisits as any}
      queryKey={[QUERY_KEYS.LINK_VISITS]}
      filter={{
        linkId,
      }}
      defaultLimit={100}
    />
  );
};

export { LinkVisitsTable };
