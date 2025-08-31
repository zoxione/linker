"use client";

import { useCopyToClipboard } from "usehooks-ts";

import { Badge } from "@repo/ui/components/badge";
import { toast } from "@repo/ui/components/toast";
import { Tooltip, TooltipContent, TooltipTrigger } from "@repo/ui/components/tooltip";

import { displayError } from "@/shared/utils/display-error";

interface UrlBadgeProps {
  url: string;
}

const UrlBadge = ({ url }: UrlBadgeProps) => {
  const [, copy] = useCopyToClipboard();

  const handleCopy = async () => {
    try {
      await copy(url);
      toast.success({ description: "Скопировано в буфер обмена" });
    } catch (error) {
      await displayError(error);
    }
  };

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Badge onClick={handleCopy} variant="outline" className="cursor-pointer">
          {url.length < 24 ? url : `${url.slice(0, 24)}...`}
        </Badge>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">{url}</TooltipContent>
    </Tooltip>
  );
};

export { UrlBadge };
