"use client";

import Link from "next/link";

import { Badge } from "@repo/ui/components/badge";

import { Link as LinkType } from "@/entities/link/model/link.types";
import { UpdateStatusLinkSwitch } from "@/features/link/update-status-link";
import { UrlBadge } from "@/shared/ui/url-badge";
import { ColumnDef } from "@tanstack/react-table";

import { LinksTableActionsCell } from "./links-table.actions-cell";

const linksTableColumns: ColumnDef<LinkType>[] = [
  {
    accessorKey: "name",
    header: "Название",
    cell: ({ row }) => {
      const value = row.original.name;
      return (
        <Link
          href={`/dashboard/links/${row.original.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2"
        >
          {value}
        </Link>
      );
    },
  },
  {
    accessorKey: "url",
    header: "URL",
    cell: ({ row }) => {
      const value = row.original.url;
      return <UrlBadge url={value} />;
    },
  },
  {
    accessorKey: "redirectUrl",
    header: "URL перенаправления",
    cell: ({ row }) => {
      const value = row.original.redirectUrl;
      return <UrlBadge url={value} />;
    },
  },
  {
    accessorKey: "redirectCount",
    header: "Переходов",
    cell: ({ row }) => {
      const value = row.original.redirectCount;
      return <Badge variant="secondary">{value}</Badge>;
    },
  },
  {
    accessorKey: "status",
    header: "Статус",
    cell: ({ row }) => {
      const value = row.original.status;
      return <UpdateStatusLinkSwitch id={row.original.id} status={value} />;
    },
  },
  {
    id: "actions",
    header: () => {
      return <div role="option" />;
    },
    cell: LinksTableActionsCell,
  },
];

export { linksTableColumns };
