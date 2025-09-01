import { DeleteLinkBlock } from "@/features/link/delete-link";
import { UpdateLinkBlock } from "@/features/link/update-link";
import { UpdateStatusLinkBlock } from "@/features/link/update-status-link";
import { LinkRedirectCounter } from "@/widgets/link/link-redirect-counter";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
      <UpdateLinkBlock id={id} />
      <div className="grid h-fit grid-cols-1 gap-2 md:gap-4 xl:grid-cols-2">
        <UpdateStatusLinkBlock id={id} />
        <LinkRedirectCounter id={id} />
      </div>
      <DeleteLinkBlock id={id} />
    </div>
  );
}
