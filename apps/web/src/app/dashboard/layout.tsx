import { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@repo/ui/components/sidebar";

import { AppSidebar } from "@/widgets/shared/app-sidebar";
import { PageHeader } from "@/widgets/shared/page-header";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-hidden">
        <section className="max-h-svh flex-1 overflow-y-auto md:max-h-[calc(100svh-16px)]">
          <PageHeader className="sticky top-0 z-50 p-4" />
          <div className="px-4 pb-4">{children}</div>
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}
