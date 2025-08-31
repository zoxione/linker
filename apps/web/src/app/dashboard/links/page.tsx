import { CreateLinkButton } from "@/features/link/create-link";
import { LinksTable } from "@/widgets/link/links-table";

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <div className="space-y-2">
        <p className="text-muted-foreground">
          Здесь представлены ваши ссылки, которые вы можете редактировать или удалять.
        </p>
        <LinksTable />
      </div>
      <CreateLinkButton />
    </>
  );
}
