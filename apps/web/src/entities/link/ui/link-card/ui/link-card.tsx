"use client";

import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";

import { Badge } from "@repo/ui/badge";
import { Button } from "@repo/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@repo/ui/card";
import { cn } from "@repo/ui/cn";
import { Icons } from "@repo/ui/icons";

import { DATE_FORMAT } from "@/core/data/constants";
import { useDialog } from "@/core/providers/dialog-provider";
import { Link } from "@/entities/link/model/link.types";
import { UpdateStatusLinkSwitch } from "@/features/link/update-status-link";
import { dayjs } from "@/shared/lib/dayjs";
import { displayError } from "@/shared/utils/display-error";

interface LinkCardProps {
  link: Link;
  className?: string;
}

const LinkCard = ({ link, className }: LinkCardProps) => {
  const { onOpen } = useDialog();
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
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
        <UpdateStatusLinkSwitch id={link.id} status={link.status} />
        <CardTitle>{link.name}</CardTitle>
        <Button
          onClick={() =>
            onOpen({
              type: "update-link",
              props: { link },
            })
          }
          variant="ghost"
          size="icon"
        >
          <Icons.update />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2 pb-4 md:flex-row">
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
