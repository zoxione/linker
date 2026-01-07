import { Alert, AlertDescription, AlertTitle } from "@repo/ui/alert";
import { Icons } from "@repo/ui/icons";
import { cn } from "@repo/ui/utils/cn";

interface NonCommercialNoticeProps {
  className?: string;
}

const NonCommercialNotice = ({ className }: NonCommercialNoticeProps) => {
  return (
    <Alert className={cn("", className)}>
      <Icons.info className="!text-yellow-500" />
      <AlertTitle>Это некоммерческий проект</AlertTitle>
      <AlertDescription>
        Данный проект создан исключительно в учебных целях и не предназначен для коммерческого использования.
      </AlertDescription>
    </Alert>
  );
};

export { NonCommercialNotice };
