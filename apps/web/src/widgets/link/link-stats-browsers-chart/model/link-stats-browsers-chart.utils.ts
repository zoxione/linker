import { GetApiCustomerLinksIdStatsBrowsers200 } from "@/shared/api";

import { COLORS } from "./link-stats-browsers-chart.constants";

const getLinkStatsBrowsersChartConfig = (items: GetApiCustomerLinksIdStatsBrowsers200["items"]) => {
  return items.reduce<Record<string, { label: string; color: string }>>(
    (acc, item, index) => {
      acc[item.browser] = {
        label: item.browser,
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

const getLinkStatsBrowsersChartData = (items: GetApiCustomerLinksIdStatsBrowsers200["items"]) => {
  return items.map((item, index) => ({
    ...item,
    fill: COLORS[index % COLORS.length]!,
  }));
};

export { getLinkStatsBrowsersChartConfig, getLinkStatsBrowsersChartData };
