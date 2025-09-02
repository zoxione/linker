import { ReactNode } from "react";

import { LinkTabs } from "@/widgets/link/link-tabs";

interface LayoutProps {
  params: Promise<{ id: string }>;
  children: ReactNode;
}

export default async function Layout({ params, children }: LayoutProps) {
  const { id } = await params;

  return (
    <div className="space-y-3">
      <LinkTabs id={id} />
      {children}
    </div>
  );
}
