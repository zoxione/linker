"use client";

import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@repo/ui/components/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/components/select";
import { Skeleton } from "@repo/ui/components/skeleton";
import { cn } from "@repo/ui/utils/cn";

import { QUERY_KEYS } from "@/core/data/constants";
import { Link } from "@/entities/link/model/link.types";
import { GetApiCustomerLinksIdStatsVisitsQueryParams, useGetApiCustomerLinksIdStatsVisits } from "@/shared/api";
import { dayjs } from "@/shared/lib/dayjs";

type RangeType = GetApiCustomerLinksIdStatsVisitsQueryParams["range"];

interface LinkStatsVisitsChartProps {
  id: Link["id"];
  className?: string;
}

const LinkStatsVisitsChart = ({ id, className }: LinkStatsVisitsChartProps) => {
  const [range, setRange] = useState<RangeType>("1m");

  const linkStatsQuery = useGetApiCustomerLinksIdStatsVisits(
    id,
    { range },
    {
      query: {
        queryKey: [QUERY_KEYS.LINKS, id, "stats", range],
      },
    },
  );

  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Статистика переходов</CardTitle>
        <Select value={range} onValueChange={(value) => setRange(value as RangeType)}>
          <SelectTrigger>
            <SelectValue placeholder="Выберите период" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3m">Последние 3 месяца</SelectItem>
            <SelectItem value="1m">Последний месяц</SelectItem>
            <SelectItem value="1w">Последняя неделя</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        {linkStatsQuery.status === "success" ? (
          <ChartContainer
            config={{
              value: {
                label: "Переходов",
                color: "#2563eb",
              },
            }}
            className="h-[250px] w-full"
          >
            <BarChart accessibilityLayer data={linkStatsQuery.data.items}>
              <CartesianGrid vertical={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value: string) => {
                  return dayjs(value).format("DD.MM");
                }}
              />
              <Bar dataKey="value" fill="var(--color-value)" radius={4} />
            </BarChart>
          </ChartContainer>
        ) : (
          <Skeleton className="h-[250px] w-full" />
        )}
      </CardContent>
    </Card>
  );
};

export { LinkStatsVisitsChart };
