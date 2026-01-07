"use client";

import { useRouter } from "next/navigation";

import { Button } from "@repo/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";

import { useDialog } from "@/core/providers/dialog-provider";
import { Link } from "@/entities/link/model/link.types";

interface DeleteLinkCardProps {
  link: Link;
}

const DeleteLinkCard = ({ link }: DeleteLinkCardProps) => {
  const { onOpen } = useDialog();
  const router = useRouter();

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Удалить ссылку</CardTitle>
        <CardDescription>Удаление ссылки &quot;{link.name}&quot; и всех данных, связанных с ней</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={() =>
            onOpen({
              type: "delete-link",
              props: {
                link,
                onSuccess: () => {
                  router.push("/dashboard/links");
                },
              },
            })
          }
          variant="destructive"
        >
          Удалить ссылку
        </Button>
      </CardContent>
    </Card>
  );
};

export { DeleteLinkCard };
