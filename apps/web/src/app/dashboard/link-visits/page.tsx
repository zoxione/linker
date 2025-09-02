import { LinkVisitsTable } from "@/widgets/link-visit/link-visits-table";

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="space-y-2">
      <p className="text-muted-foreground">Здесь представлены переходы по вашим ссылкам.</p>
      <LinkVisitsTable />
    </div>
  );
}
