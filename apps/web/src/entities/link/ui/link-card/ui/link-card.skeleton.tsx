"use client";

import { Skeleton } from "@repo/ui/skeleton";
import { cn } from "@repo/ui/utils/cn";

interface LinkCardSkeletonProps {
  className?: string;
}

const LinkCardSkeleton = ({ className }: LinkCardSkeletonProps) => {
  return <Skeleton className={cn("h-36 w-full rounded-xl", className)} />;
};

export { LinkCardSkeleton };
