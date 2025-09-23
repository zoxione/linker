"use client";

import Link from "next/link";

import { Badge } from "@repo/ui/components/badge";
import { SELECT_DEFAULT_VALUE } from "@repo/ui/components/select";
import { TableHeadFilter, TableHeadSort } from "@repo/ui/components/table";

import { DATE_TIME_FORMAT } from "@/core/data/constants";
import { LINK_STATUS_OPTIONS } from "@/entities/link/model/link.constants";
import { Link as LinkType } from "@/entities/link/model/link.types";
import { UpdateStatusLinkSwitch } from "@/features/link/update-status-link";
import { dayjs } from "@/shared/lib/dayjs";
import { UrlBadge } from "@/shared/ui/url-badge";
import { ColumnDef } from "@tanstack/react-table";

import { LinksTableActionsCell } from "./links-table.actions-cell";

interface CreateLinksTableColumnsProps {}

const createLinksTableColumns = ({}: CreateLinksTableColumnsProps): ColumnDef<LinkType>[] => {
  return [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <TableHeadSort
            order={column.getIsSorted()}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Название
          </TableHeadSort>
        );
      },
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
      header: ({ column }) => {
        return (
          <TableHeadSort
            order={column.getIsSorted()}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Переходов
          </TableHeadSort>
        );
      },
      cell: ({ row }) => {
        const value = row.original.redirectCount;
        return <Badge variant="secondary">{value}</Badge>;
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => {
        const value = column.getFilterValue() as string | undefined;
        return (
          <TableHeadFilter
            label="Статус"
            defaultValue={value || SELECT_DEFAULT_VALUE}
            onValueChange={(value) => {
              if (value !== SELECT_DEFAULT_VALUE) {
                column.setFilterValue(value);
              } else {
                column.setFilterValue(undefined);
              }
            }}
            options={LINK_STATUS_OPTIONS}
          />
        );
      },
      cell: ({ row }) => {
        const value = row.original.status;
        return <UpdateStatusLinkSwitch id={row.original.id} status={value} />;
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
      cell: LinksTableActionsCell,
    },
  ];
};

export { createLinksTableColumns };
