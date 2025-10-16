"use client";

import { Row } from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@repo/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu";
import { Icons } from "@repo/ui/icons";
import { cn } from "@repo/ui/utils/cn";

import { useDialog } from "@/core/providers/dialog-provider";
import { Link as LinkType } from "@/entities/link/model/link.types";

interface LinksTableActionsCellProps {
  row: Row<LinkType>;
}

const LinksTableActionsCell = ({ row }: LinksTableActionsCellProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const { onOpen } = useDialog();

  return (
    <DropdownMenu open={isOpenMenu} onOpenChange={setIsOpenMenu}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          role="option"
          className={cn("", isOpenMenu ? "bg-accent text-accent-foreground" : "")}
        >
          <Icons.more />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent collisionPadding={16}>
        <DropdownMenuLabel>Действия</DropdownMenuLabel>
        <DropdownMenuGroup>
          <Link href={row.original.url} target="_blank" rel="noopener noreferrer">
            <DropdownMenuItem>
              <Icons.externalLink />
              Перейти
            </DropdownMenuItem>
          </Link>
          <Link href={`/dashboard/links/${row.original.id}`}>
            <DropdownMenuItem>
              <Icons.update />
              Редактировать
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={() => onOpen({ type: "link-qrcode", props: { link: row.original } })}>
            <Icons.qrcode />
            QR код
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => onOpen({ type: "delete-link", props: { link: row.original } })}
          >
            <Icons.delete />
            Удалить
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LinksTableActionsCell };
