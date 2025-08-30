import { Icons } from "@repo/ui/components/icons";

const DATE_FORMAT = "DD.MM.YYYY";

const LIMIT_DEFAULT = 20;

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

const QUERY_KEYS = {
  LINKS: "links",
};

export { APP_SIDEBAR_ITEMS, DATE_FORMAT, LIMIT_DEFAULT, QUERY_KEYS };
