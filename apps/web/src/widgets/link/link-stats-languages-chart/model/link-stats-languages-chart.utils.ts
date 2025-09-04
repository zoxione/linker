import { GetApiCustomerLinksIdStatsLanguages200 } from "@/shared/api";

import { COLORS } from "./link-stats-languages-chart.constants";

const getLinkStatsLanguagesChartConfig = (items: GetApiCustomerLinksIdStatsLanguages200["items"]) => {
  return items.reduce<Record<string, { label: string; color: string }>>(
    (acc, item, index) => {
      acc[item.language] = {
        label: item.language,
        color: COLORS[index % COLORS.length]!,
      };
      return acc;
    },
    {
      value: {
        label: "Переходов",
        color: "var(--primary)",
      },
    },
  );
};

const getLinkStatsLanguagesChartData = (items: GetApiCustomerLinksIdStatsLanguages200["items"]) => {
  return items.map((item, index) => ({
    ...item,
    fill: COLORS[index % COLORS.length]!,
  }));
};

export { getLinkStatsLanguagesChartConfig, getLinkStatsLanguagesChartData };
