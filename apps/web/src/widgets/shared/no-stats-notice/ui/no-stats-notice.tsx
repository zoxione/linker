import { Card, CardContent } from "@repo/ui/components/card";
import { Icons } from "@repo/ui/components/icons";
import { cn } from "@repo/ui/utils/cn";

interface NoStatsNoticeProps {
  className?: string;
}

const NoStatsNotice = ({ className }: NoStatsNoticeProps) => {
  return (
    <Card className={cn("", className)}>
      <CardContent className="grid grid-cols-[0_1fr] items-start gap-y-0.5 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3">
        <Icons.info className="size-5 text-yellow-500" />
        <div className="col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight"> Нет данных для отображения</div>
        <div className="text-muted-foreground col-start-2 text-sm">
          На данный момент статистика недоступна или ещё не собрана.
        </div>
      </CardContent>
    </Card>
  );
};

export { NoStatsNotice };
