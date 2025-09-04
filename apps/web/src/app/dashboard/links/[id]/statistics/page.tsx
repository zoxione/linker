import { LinkStatsBrowsersChart } from "@/widgets/link/link-stats-browsers-chart";
import { LinkStatsLanguagesChart } from "@/widgets/link/link-stats-languages-chart";
import { LinkStatsVisitsChart } from "@/widgets/link/link-stats-visits-chart";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="grid grid-cols-1 gap-2 md:gap-4">
      <LinkStatsVisitsChart id={id} />
      <div className="grid h-fit grid-cols-1 gap-2 md:gap-4 xl:grid-cols-2">
        <LinkStatsLanguagesChart id={id} />
        <LinkStatsBrowsersChart id={id} />
      </div>
    </div>
  );
}
