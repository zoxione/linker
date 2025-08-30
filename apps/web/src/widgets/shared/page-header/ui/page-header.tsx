"use client";

import { usePathname } from "next/navigation";

import { Icons } from "@repo/ui/components/icons";
import { Separator } from "@repo/ui/components/separator";
import { SidebarTrigger } from "@repo/ui/components/sidebar";

import { APP_SIDEBAR_ITEMS } from "@/core/data/constants";

const ALL_ITEMS = APP_SIDEBAR_ITEMS.concat([
  {
    title: "Профиль",
    url: "/dashboard/profile",
    icon: Icons.user,
  },
]);

interface PageHeaderProps {}

const PageHeader = ({}: PageHeaderProps) => {
  const pathname = usePathname();
  const currentItem = ALL_ITEMS.find((item) => item.url === pathname);

  return (
    <div className="flex items-center gap-2">
      <SidebarTrigger />
      <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
      <h1>{currentItem?.title}</h1>
    </div>
  );
};

export { PageHeader };
