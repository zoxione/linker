"use client";

import { Button } from "@repo/ui/components/button";

import { useDialog } from "@/core/providers/dialog-provider";

// TODO

export default function Page() {
  // const { data } = useGetApiCustomerLinks();
  const { onOpen } = useDialog();

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <Button onClick={() => onOpen({ type: "create-link", props: {} })}>Создать ссылку</Button>
      </div>
    </div>
  );
}
