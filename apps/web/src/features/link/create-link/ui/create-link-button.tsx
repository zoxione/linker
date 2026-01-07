"use client";

import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons";

import { useDialog } from "@/core/providers/dialog-provider";

interface CreateLinkButtonProps {}

const CreateLinkButton = ({}: CreateLinkButtonProps) => {
  const { onOpen } = useDialog();

  return (
    <Button
      onClick={() => onOpen({ type: "create-link", props: {} })}
      size="icon"
      className="fixed right-6 bottom-6 rounded-full"
    >
      <Icons.add />
    </Button>
  );
};

export { CreateLinkButton };
