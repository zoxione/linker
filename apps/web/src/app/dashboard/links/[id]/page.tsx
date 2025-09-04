import { notFound } from "next/navigation";

import { DeleteLinkBlock } from "@/features/link/delete-link";
import { UpdateLinkBlock } from "@/features/link/update-link";
import { UpdateStatusLinkBlock } from "@/features/link/update-status-link";
import { Link, getApiCustomerLinksId } from "@/shared/api";
import { getCookieHeader } from "@/shared/utils/get-cookie-header";
import { LinkRedirectCounter } from "@/widgets/link/link-redirect-counter";

export const dynamic = "force-dynamic";

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
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
      <UpdateLinkBlock id={link.id} />
      <div className="grid h-fit grid-cols-1 gap-2 md:gap-4 xl:grid-cols-2">
        <UpdateStatusLinkBlock id={link.id} />
        <LinkRedirectCounter id={link.id} />
      </div>
      <DeleteLinkBlock id={link.id} />
    </div>
  );
}
