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
      <SidebarInset>
        <section className="flex-1 space-y-4 p-4">
          <PageHeader />
          {children}
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}
