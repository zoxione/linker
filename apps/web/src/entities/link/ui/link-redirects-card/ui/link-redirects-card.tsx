import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";

import { Link } from "@/entities/link/model/link.types";
import { formatNumber } from "@/shared/utils/format-number";

interface LinkRedirectsCardProps {
  link: Link;
}

const LinkRedirectsCard = ({ link }: LinkRedirectsCardProps) => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Количество переходов</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <div className="text-center text-5xl font-semibold">{formatNumber(link.redirectCount)}</div>
      </CardContent>
    </Card>
  );
};

export { LinkRedirectsCard };
