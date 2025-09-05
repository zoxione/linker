import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";

import { LINK_STATUS_PRETTY } from "@/entities/link/model/link.constants";
import { Link } from "@/entities/link/model/link.types";

import { UpdateStatusLinkSwitch } from "./update-status-link-switch";

interface UpdateStatusLinkCardProps {
  link: Link;
}

const UpdateStatusLinkCard = ({ link }: UpdateStatusLinkCardProps) => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Состояние</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2">
        <UpdateStatusLinkSwitch id={link.id} status={link.status} />
        <div className="text-center font-medium">{LINK_STATUS_PRETTY[link.status]}</div>
      </CardContent>
    </Card>
  );
};

export { UpdateStatusLinkCard };
