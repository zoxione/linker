"use client";

import { cn } from "@repo/ui/cn";
import { Skeleton } from "@repo/ui/skeleton";

interface LinkCardSkeletonProps {
  className?: string;
}

const LinkCardSkeleton = ({ className }: LinkCardSkeletonProps) => {
  return <Skeleton className={cn("h-36 w-full rounded-xl", className)} />;
};

export { LinkCardSkeleton };
