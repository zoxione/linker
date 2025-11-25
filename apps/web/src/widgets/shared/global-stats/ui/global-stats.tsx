"use client";

import Link from "next/link";

import { buttonVariants } from "@repo/ui/components/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Skeleton } from "@repo/ui/components/skeleton";
import { cn } from "@repo/ui/utils/cn";

import { QUERY_KEYS } from "@/core/data/constants";
import { useGetApiCustomerStatsGlobal } from "@/shared/api";
import { formatNumber } from "@/shared/utils/format-number";

interface GlobalStatsProps {
  className?: string;
}

const GlobalStats = ({ className }: GlobalStatsProps) => {
  const statsGlobalQuery = useGetApiCustomerStatsGlobal({
    query: {
      queryKey: [QUERY_KEYS.STATS],
    },
  });

  return (
    <div className={cn("grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4", className)}>
      <Card>
        <CardHeader>
          <CardDescription>Всего ссылок</CardDescription>
          {statsGlobalQuery.status === "success" ? (
            <CardTitle className="text-2xl @3xs/card:text-3xl">
              {formatNumber(statsGlobalQuery.data.totalLinks)}
            </CardTitle>
          ) : (
            <Skeleton className="h-9 w-36" />
          )}
          <Link
            href="/dashboard/links"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
            )}
          >
            Подробнее
          </Link>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>Всего переходов</CardDescription>
          {statsGlobalQuery.status === "success" ? (
            <CardTitle className="text-2xl @3xs/card:text-3xl">
              {formatNumber(statsGlobalQuery.data.totalLinkVisits)}
            </CardTitle>
          ) : (
            <Skeleton className="h-9 w-36" />
          )}
          <Link
            href="/dashboard/link-visits"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
            )}
          >
            Подробнее
          </Link>
        </CardHeader>
      </Card>
    </div>
  );
};

export { GlobalStats };
