"use client";

import { ColumnDef } from "@tanstack/react-table";
import countryCodeToFlagEmoji from "country-code-to-flag-emoji";
import Link from "next/link";

import { Badge } from "@repo/ui/badge";
import { TableHeadSort } from "@repo/ui/table";

import { DATE_TIME_FORMAT } from "@/core/data/constants";
import { LinkVisit } from "@/entities/link-visit/model/link-visit.types";
import { dayjs } from "@/shared/lib/dayjs";

import { LinkVisitsTableActionsCell } from "./link-visits-table.actions-cell";

interface CreateLinkVisitsTableColumnsProps {}

const createLinkVisitsTableColumns = ({}: CreateLinkVisitsTableColumnsProps): ColumnDef<LinkVisit>[] => {
  return [
    {
      accessorKey: "linkName",
      header: "Ссылка",
      cell: ({ row }) => {
        const value = row.original.linkName;
        return (
          <Link
            href={`/dashboard/links/${row.original.linkId}`}
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
      accessorKey: "ip",
      header: "IP",
      cell: ({ row }) => {
        const value = row.original.ip;
        return <div>{value ?? "Неизвестен"}</div>;
      },
    },
    {
      accessorKey: "language",
      header: "Язык",
      cell: ({ row }) => {
        const value = row.original.language;
        return value ? <Badge variant="secondary">{countryCodeToFlagEmoji(value)}</Badge> : <div>Неизвестен</div>;
      },
    },
    {
      accessorKey: "system",
      header: "Система",
      cell: ({ row }) => {
        return (
          <ul>
            <li className="text-muted-foreground text-xs">{row.original.browser}</li>
            <li className="text-muted-foreground text-xs">{row.original.cpu}</li>
            <li className="text-muted-foreground text-xs">{row.original.device}</li>
            <li className="text-muted-foreground text-xs">{row.original.engine}</li>
            <li className="text-muted-foreground text-xs">{row.original.os}</li>
          </ul>
        );
      },
    },
    {
      accessorKey: "referer",
      header: "Источник",
      cell: ({ row }) => {
        const value = row.original.referer;
        return <div>{value ?? "Неизвестен"}</div>;
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => {
        return (
          <TableHeadSort
            order={column.getIsSorted()}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Дата и время
          </TableHeadSort>
        );
      },
      cell: ({ row }) => {
        const value = row.original.createdAt;
        return <div>{dayjs(value).format(DATE_TIME_FORMAT)}</div>;
      },
    },
    {
      id: "actions",
      header: () => {
        return <div role="option" />;
      },
      cell: LinkVisitsTableActionsCell,
    },
  ];
};

export { createLinkVisitsTableColumns };
