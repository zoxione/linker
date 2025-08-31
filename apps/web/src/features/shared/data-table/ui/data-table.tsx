"use client";

import { useState } from "react";

import { Button } from "@repo/ui/components/button";
import { Skeleton } from "@repo/ui/components/skeleton";
import { Icons } from "@repo/ui/icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui/table";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { LIMIT_VALUES } from "../model/data-table.constants";
import { QueryHook } from "../model/data-table.types";

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  useQuery: QueryHook<TData>;
  queryKey: string[];
  filter: Record<string, unknown>;
  defaultLimit?: (typeof LIMIT_VALUES)[number];
  manualSorting?: boolean;
  manualFiltering?: boolean;
}

const DataTable = <TData,>({
  columns,
  useQuery,
  queryKey,
  filter,
  defaultLimit = LIMIT_VALUES[0],
  manualSorting = false,
  manualFiltering = false,
}: DataTableProps<TData>) => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(defaultLimit);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const {
    data: response = {
      limit: 0,
      offset: 0,
      count: 0,
      total: 0,
      items: [],
    },
    status: responseStatus,
  } = useQuery(
    {
      limit,
      offset: (page - 1) * limit,
      ...filter,
      sort_by: manualSorting && sorting.length > 0 && sorting[0] ? sorting[0].id : undefined,
      desc: manualSorting && sorting.length > 0 && sorting[0] ? String(sorting[0].desc) : undefined,
      ...(manualFiltering && columnFilters.length > 0
        ? columnFilters.reduce((acc, filter) => ({ ...acc, [filter.id]: filter.value }), {})
        : undefined),
    },
    {
      query: {
        gcTime: 0,
        staleTime: 0,
        queryKey: [...queryKey, page, limit, filter, sorting, columnFilters],
      },
    },
  );

  const table = useReactTable({
    data: response.items,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    manualFiltering,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const maxPage = Math.ceil(response.total / limit) || 1;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="ml-auto flex items-center gap-3">
          {responseStatus === "success" ? (
            <div className="text-xs font-medium">
              Страница {page} из {maxPage}
            </div>
          ) : (
            <Skeleton className="h-4 w-32" />
          )}
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={responseStatus !== "success" || page === 1}
            >
              <Icons.left />
            </Button>
            <Button
              variant="outline"
              onClick={() => setPage((prev) => Math.min(prev + 1, maxPage))}
              disabled={responseStatus !== "success" || page === maxPage}
            >
              <Icons.right />
            </Button>
          </div>
          <Select
            value={limit.toString()}
            onValueChange={(value) => setLimit(Number(value))}
            disabled={responseStatus !== "success"}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LIMIT_VALUES.map((value) => (
                <SelectItem key={value} value={value.toString()}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="[&:has([role=option])]:bg-background truncate [&:has([role=option])]:sticky [&:has([role=option])]:right-0 [&:has([role=option])]:w-[0%]"
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="[&:has([role=option])]:bg-background truncate [&:has([role=option])]:sticky [&:has([role=option])]:right-0 [&:has([role=option])]:w-[0%]"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : responseStatus === "pending" ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  <Icons.loading className="mx-auto size-4 animate-spin" />
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Нет данных.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export { DataTable };
