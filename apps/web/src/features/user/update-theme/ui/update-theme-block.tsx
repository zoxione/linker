import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";

import { UpdateThemeSelect } from "./update-theme-select";

interface UpdateThemeBlockProps {}

const UpdateThemeBlock = ({}: UpdateThemeBlockProps) => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Тема</CardTitle>
      </CardHeader>
      <CardContent>
        <UpdateThemeSelect />
      </CardContent>
    </Card>
  );
};

export { UpdateThemeBlock };
