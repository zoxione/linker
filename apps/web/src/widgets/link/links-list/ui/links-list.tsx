"use client";

import { Button } from "@repo/ui/components/button";
import { InfiniteScrollContainer } from "@repo/ui/components/infinite-scroll-container";
import { cn } from "@repo/ui/utils/cn";

import { LIMIT_DEFAULT, QUERY_KEYS } from "@/core/data/constants";
import { useDialog } from "@/core/providers/dialog-provider";
import { LinkCard } from "@/entities/link/ui/link-card";
import { LinkCardSkeleton } from "@/entities/link/ui/link-card/ui/link-card.skeleton";
import { getApiCustomerLinks } from "@/shared/api";
import { genArray } from "@/shared/utils/gen-array";
import { plural } from "@/shared/utils/plural";
import { useInfiniteQuery } from "@tanstack/react-query";

interface LinksListProps {
  className?: string;
}

const LinksList = ({ className }: LinksListProps) => {
  const { onOpen } = useDialog();

  const linksQuery = useInfiniteQuery({
    queryKey: [QUERY_KEYS.LINKS],
    queryFn: (ctx) =>
      getApiCustomerLinks({
        limit: LIMIT_DEFAULT,
        offset: ctx.pageParam,
      }),
    initialPageParam: 0,
    getNextPageParam: (last) => (last.count > last.offset + last.limit ? last.offset + last.limit : undefined),
  });

  const links = linksQuery.data?.pages.flatMap((page) => page.items) || [];
  const total = linksQuery.data?.pages[0]?.total || 0;

  return (
    <div className={cn("space-y-2", className)}>
      {linksQuery.status === "success" ? (
        <div className="flex items-center justify-between">
          <div className="font-medium">{`${total} ${plural(["ссылка", "ссылки", "ссылок"], total)}`}</div>
          <Button onClick={() => onOpen({ type: "create-link", props: {} })}>Создать ссылку</Button>
        </div>
      ) : null}
      <div className="space-y-4">
        {linksQuery.status === "success" ? (
          links.length > 0 ? (
            <InfiniteScrollContainer
              onBottom={() => linksQuery.hasNextPage && !linksQuery.isFetching && linksQuery.fetchNextPage()}
            >
              {links.map((link) => (
                <LinkCard key={link.id} link={link} />
              ))}
            </InfiniteScrollContainer>
          ) : (
            <div className="text-center text-sm">Ссылки не найдены</div>
          )
        ) : (
          genArray(5).map((i) => <LinkCardSkeleton key={i} />)
        )}
      </div>
    </div>
  );
};

export { LinksList };
