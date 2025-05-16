import { cn } from "../../../libs/utils/cn";

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("bg-primary/10 animate-pulse rounded-md", className)} {...props} />;
};
Skeleton.displayName = "Skeleton";

export { Skeleton };
