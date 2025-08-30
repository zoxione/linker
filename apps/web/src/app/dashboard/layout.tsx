import { cookies } from "next/headers";
import { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@repo/ui/components/sidebar";

import { AppSidebar } from "@/widgets/shared/app-sidebar";
import { PageHeader } from "@/widgets/shared/page-header";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <main className="flex-1 p-4">
          <PageHeader />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
