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
  DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu";
import { Icons } from "@repo/ui/icons";
import { cn } from "@repo/ui/utils/cn";

import { LinkVisit } from "@/entities/link-visit/model/link-visit.types";

interface LinkVisitsTableActionsCellProps {
  row: Row<LinkVisit>;
}

const LinkVisitsTableActionsCell = ({ row }: LinkVisitsTableActionsCellProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

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
          <Link href={`/dashboard/links/${row.original.linkId}`} target="_blank" rel="noopener noreferrer">
            <DropdownMenuItem>
              <Icons.externalLink />
              Перейти к ссылке
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LinkVisitsTableActionsCell };
