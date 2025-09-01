"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Skeleton } from "@repo/ui/components/skeleton";

import { QUERY_KEYS } from "@/core/data/constants";
import { LINK_STATUS_PRETTY } from "@/entities/link/model/link.constants";
import { Link } from "@/entities/link/model/link.types";
import { useGetApiCustomerLinksId } from "@/shared/api";

import { UpdateStatusLinkSwitch } from "./update-status-link-switch";

interface UpdateStatusLinkBlockProps {
  id: Link["id"];
}

const UpdateStatusLinkBlock = ({ id }: UpdateStatusLinkBlockProps) => {
  const linkQuery = useGetApiCustomerLinksId(id, {
    query: {
      queryKey: [QUERY_KEYS.LINKS, id],
    },
  });

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Состояние</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2">
        {linkQuery.status === "success" ? (
          <>
            <UpdateStatusLinkSwitch id={linkQuery.data.id} status={linkQuery.data.status} />
            <div className="text-center font-medium">{LINK_STATUS_PRETTY[linkQuery.data.status]}</div>
          </>
        ) : (
          <Skeleton className="h-[50px] w-40" />
        )}
      </CardContent>
    </Card>
  );
};

export { UpdateStatusLinkBlock };
