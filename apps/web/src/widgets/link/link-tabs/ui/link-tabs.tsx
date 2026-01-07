"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Tabs, TabsList, TabsTrigger } from "@repo/ui/tabs";
import { cn } from "@repo/ui/utils/cn";

import { Link as LinkType } from "@/entities/link/model/link.types";

interface LinkTabsProps {
  id: LinkType["id"];
  className?: string;
}

const LinkTabs = ({ id, className }: LinkTabsProps) => {
  const pathname = usePathname();

  return (
    <Tabs defaultValue={pathname} className={cn("", className)}>
      <TabsList>
        <TabsTrigger value={`/dashboard/links/${id}`} asChild>
          <Link href={`/dashboard/links/${id}`}>Обзор</Link>
        </TabsTrigger>
        <TabsTrigger value={`/dashboard/links/${id}/statistics`} asChild>
          <Link href={`/dashboard/links/${id}/statistics`}>Статистика</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export { LinkTabs };
