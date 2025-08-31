import { UpdateLinkBlock } from "@/features/link/update-link";
import { LinkRedirectCounter } from "@/widgets/link/link-redirect-counter";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <UpdateLinkBlock id={id} />
      <LinkRedirectCounter id={id} />
    </div>
  );
}
