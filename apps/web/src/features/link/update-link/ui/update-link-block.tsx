"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";

import { QUERY_KEYS } from "@/core/data/constants";
import { Link } from "@/entities/link/model/link.types";
import { useGetApiCustomerLinksId } from "@/shared/api";

import { UpdateLinkForm } from "./update-link-form";
import { UpdateLinkFormSkeleton } from "./update-link-form.skeleton";

interface UpdateLinkBlockProps {
  id: Link["id"];
}

const UpdateLinkBlock = ({ id }: UpdateLinkBlockProps) => {
  const linkQuery = useGetApiCustomerLinksId(id, {
    query: {
      queryKey: [QUERY_KEYS.LINKS, id],
    },
  });

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Данные ссылки</CardTitle>
      </CardHeader>
      <CardContent>
        {linkQuery.status === "success" ? <UpdateLinkForm link={linkQuery.data} /> : <UpdateLinkFormSkeleton />}
      </CardContent>
    </Card>
  );
};

export { UpdateLinkBlock };
