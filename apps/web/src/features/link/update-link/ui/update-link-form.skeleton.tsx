import { Skeleton } from "@repo/ui/skeleton";

interface UpdateLinkFormSkeletonProps {}

const UpdateLinkFormSkeleton = ({}: UpdateLinkFormSkeletonProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-[58px] w-full" />
      <Skeleton className="h-[58px] w-full" />
      <Skeleton className="h-[58px] w-full" />
      <Skeleton className="h-[58px] w-full" />
      <Skeleton className="h-9 w-full" />
    </div>
  );
};

export { UpdateLinkFormSkeleton };
