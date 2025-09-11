import { Alert, AlertDescription, AlertTitle } from "@repo/ui/components/alert";
import { Icons } from "@repo/ui/components/icons";
import { cn } from "@repo/ui/utils/cn";

interface NoStatsNoticeProps {
  className?: string;
}

const NoStatsNotice = ({ className }: NoStatsNoticeProps) => {
  return (
    <Alert className={cn("", className)}>
      <Icons.info className="!text-yellow-500" />
      <AlertTitle>Нет данных для отображения</AlertTitle>
      <AlertDescription>На данный момент статистика недоступна или ещё не собрана.</AlertDescription>
    </Alert>
  );
};

export { NoStatsNotice };
