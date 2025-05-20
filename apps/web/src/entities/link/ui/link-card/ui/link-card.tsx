"use client";

import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";

import { Badge } from "@repo/ui/components/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Icons } from "@repo/ui/components/icons";
import { cn } from "@repo/ui/lib/utils/cn";

import { DATE_FORMAT } from "@/core/data/constants";
import { Link } from "@/entities/link/model/link.types";
import { dayjs } from "@/shared/lib/dayjs";
import { displayError } from "@/shared/utils/display-error";

interface LinkCardProps {
  link: Link;
  className?: string;
}

const LinkCard = ({ link, className }: LinkCardProps) => {
  const [_, copy] = useCopyToClipboard();

  const handleCopy = async (text: string) => {
    try {
      await copy(text);
      toast.success("Скопировано в буфер обмена");
    } catch (error) {
      await displayError(error);
    }
  };

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>{link.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2 md:flex-row">
        <Badge onClick={() => handleCopy(link.url)} variant="outline" className="cursor-pointer">
          {link.url}
        </Badge>
        <Icons.arrowDown className="text-foreground h-4 w-4 md:hidden" />
        <Icons.arrowRight className="text-foreground hidden h-4 w-4 md:block" />
        <Badge onClick={() => handleCopy(link.redirectUrl)} variant="outline" className="cursor-pointer">
          {link.redirectUrl}
        </Badge>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="flex items-center gap-1.5">
          <Icons.externalLink className="h-4 w-4" />
          <span>{link.redirectCount}</span>
        </div>
        <div className="flex items-center gap-1">{dayjs(link.createdAt).format(DATE_FORMAT)}</div>
      </CardFooter>
    </Card>
  );
};

export { LinkCard };
