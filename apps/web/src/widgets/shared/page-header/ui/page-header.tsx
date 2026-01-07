"use client";

import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";

import { Separator } from "@repo/ui/separator";
import { SidebarTrigger } from "@repo/ui/sidebar";
import { cn } from "@repo/ui/utils/cn";

import { APP_PAGES } from "@/core/data/constants";

interface PageHeaderProps {
  className?: string;
}

const PageHeader = ({ className }: PageHeaderProps) => {
  const pathname = usePathname();

  const currentPage = APP_PAGES.find((page) => {
    const matcher = match(page.url, { decode: decodeURIComponent, sensitive: true });
    return matcher(pathname) !== false;
  });

  return (
    <div className={cn("bg-background/70 flex items-center gap-2 backdrop-blur", className)}>
      <SidebarTrigger />
      <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
      {currentPage ? <h1 className="text-lg font-medium">{currentPage.title}</h1> : null}
    </div>
  );
};

export { PageHeader };
