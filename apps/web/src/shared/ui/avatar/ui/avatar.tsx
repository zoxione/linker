import BoringAvatar from "boring-avatars";

import { cn } from "@repo/ui/utils/cn";

interface AvatarProps {
  name: string;
  className?: string;
}

const Avatar = ({ name, className }: AvatarProps) => {
  return <BoringAvatar variant="beam" name={name} colors={["#ff0000", "#0000ff"]} className={cn("", className)} />;
};

export { Avatar };
