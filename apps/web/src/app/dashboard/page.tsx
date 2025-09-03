import { GlobalStats } from "@/widgets/shared/global-stats";
import { NonCommercialNotice } from "@/widgets/shared/non-commercial-notice";

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="space-y-2 md:space-y-4">
      <NonCommercialNotice />
      <GlobalStats />
    </div>
  );
}
