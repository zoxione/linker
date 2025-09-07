import { ToggleThemeCard } from "@/features/shared/toggle-theme";
import { DeleteUserCard } from "@/features/user/delete-user";
import { LogoutCard } from "@/features/user/logout";
import { UpdateUserCard } from "@/features/user/update-user";

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
      <UpdateUserCard />
      <div className="grid h-fit grid-cols-1 gap-2 md:gap-4 xl:grid-cols-2">
        <ToggleThemeCard />
      </div>
      <LogoutCard />
      <DeleteUserCard className="col-start-1" />
    </div>
  );
}
