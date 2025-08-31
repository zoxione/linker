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
]);

const QUERY_KEYS = {
  LINKS: "links",
  USERS: "users",
};

export { APP_PAGES, APP_SIDEBAR_ITEMS, DATE_FORMAT, LIMIT_DEFAULT, QUERY_KEYS };
