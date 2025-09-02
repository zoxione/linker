import { ToggleThemeBlock } from "@/features/shared/toggle-theme";
import { LogoutBlock } from "@/features/user/logout";
import { UpdateUserBlock } from "@/features/user/update-user";

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
      <UpdateUserBlock />
      <div className="grid h-fit grid-cols-1 gap-2 md:gap-4 xl:grid-cols-2">
        <ToggleThemeBlock />
      </div>
      <LogoutBlock />
    </div>
  );
}
