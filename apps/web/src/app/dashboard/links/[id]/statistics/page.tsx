import { LinkStatsVisitsChart } from "@/widgets/link/link-stats-visits-chart";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <div>
      <LinkStatsVisitsChart id={id} />
    </div>
  );
}
