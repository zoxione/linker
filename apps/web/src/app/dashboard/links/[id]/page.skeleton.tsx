import { Skeleton } from "@repo/ui/components/skeleton";

interface PageSkeletonProps {}

export default function PageSkeleton({}: PageSkeletonProps) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
      <Skeleton className="h-[428px] w-full" />
      <div className="grid h-fit grid-cols-1 gap-2 md:gap-4 xl:grid-cols-2">
        <Skeleton className="h-[146px] w-full" />
        <Skeleton className="h-[146px] w-full" />
      </div>
      <Skeleton className="h-[152px] w-full" />
    </div>
  );
}
