import { LinkStatsChart } from "@/widgets/link/link-stats-chart";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <div>
      <LinkStatsChart id={id} />
    </div>
  );
}
