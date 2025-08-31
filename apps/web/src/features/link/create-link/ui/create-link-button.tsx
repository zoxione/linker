"use client";

import { Button } from "@repo/ui/components/button";
import { Icons } from "@repo/ui/components/icons";

import { useDialog } from "@/core/providers/dialog-provider";

interface CreateLinkButtonProps {}

const CreateLinkButton = ({}: CreateLinkButtonProps) => {
  const { onOpen } = useDialog();

  return (
    <Button
      onClick={() => onOpen({ type: "create-link", props: {} })}
      size="icon"
      className="fixed bottom-6 right-6 rounded-full"
    >
      <Icons.add />
    </Button>
  );
};

export { CreateLinkButton };
