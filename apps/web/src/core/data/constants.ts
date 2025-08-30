import { Icons } from "@repo/ui/components/icons";

const QueryKeys = {
  customer: {
    links: { url: "/api/customer/links" },
  },
} as const;

const DATE_FORMAT = "DD.MM.YYYY";

const APP_SIDEBAR_ITEMS = [
  {
    title: "Главная",
    url: "/dashboard",
    icon: Icons.home,
  },
  {
    title: "Ссылки",
    url: "/dashboard/links",
    icon: Icons.links,
  },
];

export { APP_SIDEBAR_ITEMS, DATE_FORMAT, QueryKeys };
