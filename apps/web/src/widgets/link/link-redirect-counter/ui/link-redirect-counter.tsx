"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Skeleton } from "@repo/ui/components/skeleton";

import { QUERY_KEYS } from "@/core/data/constants";
import { Link } from "@/entities/link/model/link.types";
import { useGetApiCustomerLinksId } from "@/shared/api";

interface LinkRedirectCounterProps {
  id: Link["id"];
}

const LinkRedirectCounter = ({ id }: LinkRedirectCounterProps) => {
  const linkQuery = useGetApiCustomerLinksId(id, {
    query: {
      queryKey: [QUERY_KEYS.LINKS, id],
    },
  });

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Количество переходов</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        {linkQuery.status === "success" ? (
          <div className="text-center text-5xl font-semibold">{linkQuery.data.redirectCount}</div>
        ) : (
          <Skeleton className="h-12 w-40" />
        )}
      </CardContent>
    </Card>
  );
};

export { LinkRedirectCounter };
