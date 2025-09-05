import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";

import { Link } from "@/entities/link/model/link.types";

import { UpdateLinkForm } from "./update-link-form";

interface UpdateLinkCardProps {
  link: Link;
}

const UpdateLinkCard = ({ link }: UpdateLinkCardProps) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Данные ссылки</CardTitle>
      </CardHeader>
      <CardContent>
        <UpdateLinkForm link={link} />
      </CardContent>
    </Card>
  );
};

export { UpdateLinkCard };
