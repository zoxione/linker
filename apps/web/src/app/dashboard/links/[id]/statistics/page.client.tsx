"use client";

import { QUERY_KEYS } from "@/core/data/constants";
import { useGetApiCustomerLinksId } from "@/shared/api";
import { LinkStatsBrowsersChart } from "@/widgets/link/link-stats-browsers-chart";
import { LinkStatsLanguagesChart } from "@/widgets/link/link-stats-languages-chart";
import { LinkStatsVisitsChart } from "@/widgets/link/link-stats-visits-chart";
import { NoStatsNotice } from "@/widgets/shared/no-stats-notice";

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
        linkQuery.data.redirectCount > 0 ? (
          <div className="grid grid-cols-1 gap-2 md:gap-4">
            <LinkStatsVisitsChart link={linkQuery.data} />
            <div className="grid h-fit grid-cols-1 gap-2 md:gap-4 xl:grid-cols-2">
              <LinkStatsLanguagesChart link={linkQuery.data} />
              <LinkStatsBrowsersChart link={linkQuery.data} />
            </div>
          </div>
        ) : (
          <NoStatsNotice />
        )
      ) : (
        <PageSkeleton />
      )}
    </>
  );
}
