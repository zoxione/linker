"use client";

import { useRouter } from "next/navigation";

import { Button } from "@repo/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Skeleton } from "@repo/ui/components/skeleton";

import { QUERY_KEYS } from "@/core/data/constants";
import { useDialog } from "@/core/providers/dialog-provider";
import { Link } from "@/entities/link/model/link.types";
import { useGetApiCustomerLinksId } from "@/shared/api";

interface DeleteLinkBlockProps {
  id: Link["id"];
}

const DeleteLinkBlock = ({ id }: DeleteLinkBlockProps) => {
  const { onOpen } = useDialog();
  const router = useRouter();

  const linkQuery = useGetApiCustomerLinksId(id, {
    query: {
      queryKey: [QUERY_KEYS.LINKS, id],
    },
  });

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Удалить ссылку</CardTitle>
        {linkQuery.status === "success" ? (
          <CardDescription>
            Удаление ссылки &quot;{linkQuery.data.name}&quot; и всех данных, связанных с ней
          </CardDescription>
        ) : (
          <Skeleton className="h-5 w-60" />
        )}
      </CardHeader>
      <CardContent>
        {linkQuery.status === "success" ? (
          <Button
            onClick={() =>
              onOpen({
                type: "delete-link",
                props: {
                  link: linkQuery.data,
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
        ) : (
          <Skeleton className="h-9 w-full" />
        )}
      </CardContent>
    </Card>
  );
};

export { DeleteLinkBlock };
