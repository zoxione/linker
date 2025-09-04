"use client";

import { useMemo } from "react";
import { LabelList, Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@repo/ui/components/chart";
import { Skeleton } from "@repo/ui/components/skeleton";
import { cn } from "@repo/ui/utils/cn";

import { QUERY_KEYS } from "@/core/data/constants";
import { Link } from "@/entities/link/model/link.types";
import { useGetApiCustomerLinksIdStatsBrowsers } from "@/shared/api";

import {
  getLinkStatsBrowsersChartConfig,
  getLinkStatsBrowsersChartData,
} from "../model/link-stats-browsers-chart.utils";

interface LinkStatsBrowsersChartProps {
  id: Link["id"];
  className?: string;
}

const LinkStatsBrowsersChart = ({ id, className }: LinkStatsBrowsersChartProps) => {
  const linkStatsQuery = useGetApiCustomerLinksIdStatsBrowsers(id, {
    query: {
      queryKey: [QUERY_KEYS.LINKS, id, "stats-browsers"],
    },
  });

  const chartConfig = useMemo(
    () => getLinkStatsBrowsersChartConfig(linkStatsQuery.data?.items || []),
    [linkStatsQuery.data?.items],
  );
  const chartData = useMemo(
    () => getLinkStatsBrowsersChartData(linkStatsQuery.data?.items || []),
    [linkStatsQuery.data?.items],
  );

  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Статистика браузеров</CardTitle>
      </CardHeader>
      <CardContent>
        {linkStatsQuery.status === "success" ? (
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent nameKey="value" hideLabel />} />
              <Pie data={chartData} dataKey="value" nameKey="browser">
                <LabelList
                  dataKey="browser"
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

export { LinkStatsBrowsersChart };
