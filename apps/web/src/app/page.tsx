"use client";

// TODO
import { Button } from "@repo/ui/components/button";

import { useGetApiCustomerLinks } from "@/shared/api";

export default function Page() {
  const { data } = useGetApiCustomerLinks();

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button>Button</Button>
      </div>
    </div>
  );
}
