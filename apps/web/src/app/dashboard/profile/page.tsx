import { LogoutBlock } from "@/features/user/logout";
import { UpdateThemeBlock } from "@/features/user/update-theme";
import { UpdateUserBlock } from "@/features/user/update-user";

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
      <UpdateUserBlock />
      <div className="grid h-fit grid-cols-1 gap-2 md:gap-4 xl:grid-cols-2">
        <UpdateThemeBlock />
      </div>
      <LogoutBlock />
    </div>
  );
}
