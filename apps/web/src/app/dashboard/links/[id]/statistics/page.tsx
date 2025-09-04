import { notFound } from "next/navigation";

import { Link } from "@/entities/link/model/link.types";
import { getApiCustomerLinksId } from "@/shared/api";
import { getCookieHeader } from "@/shared/utils/get-cookie-header";
import { LinkStatsBrowsersChart } from "@/widgets/link/link-stats-browsers-chart";
import { LinkStatsLanguagesChart } from "@/widgets/link/link-stats-languages-chart";
import { LinkStatsVisitsChart } from "@/widgets/link/link-stats-visits-chart";
import { NoStatsNotice } from "@/widgets/shared/no-stats-notice";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  let link: Link | null = null;

  try {
    link = await getApiCustomerLinksId(id, {
      headers: await getCookieHeader(),
    });
  } catch {
    notFound();
  }

  return (
    <>
      {link.redirectCount > 0 ? (
        <div className="grid grid-cols-1 gap-2 md:gap-4">
          <LinkStatsVisitsChart id={link.id} />
          <div className="grid h-fit grid-cols-1 gap-2 md:gap-4 xl:grid-cols-2">
            <LinkStatsLanguagesChart id={link.id} />
            <LinkStatsBrowsersChart id={link.id} />
          </div>
        </div>
      ) : (
        <NoStatsNotice />
      )}
    </>
  );
}
