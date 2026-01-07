import { Icons } from "@repo/ui/icons";

const DATE_FORMAT = "DD.MM.YYYY";

const DATE_TIME_FORMAT = "DD.MM.YYYY HH:mm";

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
  {
    title: "Переходы по ссылкам",
    url: "/dashboard/link-visits",
    icon: Icons.linkVisits,
  },
];

const APP_PAGES = APP_SIDEBAR_ITEMS.map((item) => ({
  title: item.title,
  url: item.url,
})).concat([
  {
    title: "Профиль",
    url: "/dashboard/profile",
  },
  {
    title: "Ссылка",
    url: "/dashboard/links/:id",
  },
  {
    title: "Статистика ссылки",
    url: "/dashboard/links/:id/statistics",
  },
]);

const QUERY_KEYS = {
  LINKS: "links",
  LINK_VISITS: "link-visits",
  STATS: "stats",
};

export { APP_PAGES, APP_SIDEBAR_ITEMS, DATE_FORMAT, DATE_TIME_FORMAT, LIMIT_DEFAULT, QUERY_KEYS };
