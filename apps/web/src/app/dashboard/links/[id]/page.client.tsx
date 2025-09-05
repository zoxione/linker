"use client";

import { QUERY_KEYS } from "@/core/data/constants";
import { LinkRedirectsCard } from "@/entities/link/ui/link-redirects-card";
import { DeleteLinkCard } from "@/features/link/delete-link";
import { UpdateLinkCard } from "@/features/link/update-link";
import { UpdateStatusLinkCard } from "@/features/link/update-status-link";
import { useGetApiCustomerLinksId } from "@/shared/api";

import PageSkeleton from "./page.skeleton";

interface PageClientProps {
  id: string;
}

export default function PageClient({ id }: PageClientProps) {
  const linkQuery = useGetApiCustomerLinksId(id, {
    query: {
      queryKey: [QUERY_KEYS.LINKS, id],
    },
  });

  return (
    <>
      {linkQuery.status === "success" ? (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
          <UpdateLinkCard link={linkQuery.data} />
          <div className="grid h-fit grid-cols-1 gap-2 md:gap-4 xl:grid-cols-2">
            <UpdateStatusLinkCard link={linkQuery.data} />
            <LinkRedirectsCard link={linkQuery.data} />
          </div>
          <DeleteLinkCard link={linkQuery.data} />
        </div>
      ) : (
        <PageSkeleton />
      )}
    </>
  );
}
