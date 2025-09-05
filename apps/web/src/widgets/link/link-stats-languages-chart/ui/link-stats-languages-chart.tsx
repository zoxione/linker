"use client";

import { useMemo } from "react";
import { LabelList, Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@repo/ui/components/chart";
import { Skeleton } from "@repo/ui/components/skeleton";
import { cn } from "@repo/ui/utils/cn";

import { QUERY_KEYS } from "@/core/data/constants";
import { Link } from "@/entities/link/model/link.types";
import { useGetApiCustomerLinksIdStatsLanguages } from "@/shared/api";

import {
  getLinkStatsLanguagesChartConfig,
  getLinkStatsLanguagesChartData,
} from "../model/link-stats-languages-chart.utils";

interface LinkStatsLanguagesChartProps {
  link: Link;
  className?: string;
}

const LinkStatsLanguagesChart = ({ link, className }: LinkStatsLanguagesChartProps) => {
  const linkStatsQuery = useGetApiCustomerLinksIdStatsLanguages(link.id, {
    query: {
      queryKey: [QUERY_KEYS.LINKS, link.id, "stats-languages"],
    },
  });

  const chartConfig = useMemo(
    () => getLinkStatsLanguagesChartConfig(linkStatsQuery.data?.items || []),
    [linkStatsQuery.data?.items],
  );
  const chartData = useMemo(
    () => getLinkStatsLanguagesChartData(linkStatsQuery.data?.items || []),
    [linkStatsQuery.data?.items],
  );

  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Статистика языков</CardTitle>
      </CardHeader>
      <CardContent>
        {linkStatsQuery.status === "success" ? (
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent nameKey="value" hideLabel />} />
              <Pie data={chartData} dataKey="value" nameKey="language">
                <LabelList
                  dataKey="language"
                  className="fill-background"
                  stroke="none"
                  fontSize={12}
                  formatter={(value: keyof typeof chartConfig) => chartConfig[value]?.label}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        ) : (
          <Skeleton className="h-[250px] w-full" />
        )}
      </CardContent>
    </Card>
  );
};

export { LinkStatsLanguagesChart };
