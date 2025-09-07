"use client";

import { Button } from "@repo/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/card";
import { cn } from "@repo/ui/utils/cn";

import { useDialog } from "@/core/providers/dialog-provider";

interface DeleteUserCardProps {
  className?: string;
}

const DeleteUserCard = ({ className }: DeleteUserCardProps) => {
  const { onOpen } = useDialog();

  return (
    <Card className={cn("h-fit", className)}>
      <CardHeader>
        <CardTitle>Удалить аккаунт</CardTitle>
        <CardDescription>Удалить все данные, связанные с аккаунтом</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={() => onOpen({ type: "delete-user", props: {} })} variant="destructive">
          Удалить аккаунт
        </Button>
      </CardContent>
    </Card>
  );
};

export { DeleteUserCard };
