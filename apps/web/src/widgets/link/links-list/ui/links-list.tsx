"use client";

import { Button } from "@repo/ui/components/button";

import { useDialog } from "@/core/providers/dialog-provider";
import { LinkCard } from "@/entities/link/ui/link-card";
import { LinkCardSkeleton } from "@/entities/link/ui/link-card/ui/link-card.skeleton";
import { useGetApiCustomerLinks } from "@/shared/api";
import { genArray } from "@/shared/utils/gen-array";

interface LinksListProps {}

const LinksList = ({}: LinksListProps) => {
  const { onOpen } = useDialog();

  const linksQuery = useGetApiCustomerLinks({ limit: 100, offset: 0 }); // TODO

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Ссылки</h1>
        <Button onClick={() => onOpen({ type: "create-link", props: {} })}>Создать ссылку</Button>
      </div>
      <div className="flex flex-col gap-2">
        {linksQuery.status === "success"
          ? linksQuery.data.items.map((link) => <LinkCard key={link.id} link={link} />)
          : genArray(3).map((_, i) => <LinkCardSkeleton key={i} />)}
      </div>
    </div>
  );
};

export { LinksList };
