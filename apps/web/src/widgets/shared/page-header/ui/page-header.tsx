"use client";

import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";

import { Separator } from "@repo/ui/components/separator";
import { SidebarTrigger } from "@repo/ui/components/sidebar";

import { APP_PAGES } from "@/core/data/constants";

interface PageHeaderProps {}

const PageHeader = ({}: PageHeaderProps) => {
  const pathname = usePathname();

  const currentPage = APP_PAGES.find((page) => {
    const matcher = match(page.url, { decode: decodeURIComponent, sensitive: true });
    return matcher(pathname) !== false;
  });

  return (
    <div className="flex items-center gap-2">
      <SidebarTrigger />
      <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
      {currentPage ? <h1 className="text-lg font-medium">{currentPage.title}</h1> : null}
    </div>
  );
};

export { PageHeader };
