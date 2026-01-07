import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";

import { ToggleThemeSelect } from "./toggle-theme-select";

interface ToggleThemeCardProps {}

const ToggleThemeCard = ({}: ToggleThemeCardProps) => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Тема</CardTitle>
      </CardHeader>
      <CardContent>
        <ToggleThemeSelect />
      </CardContent>
    </Card>
  );
};

export { ToggleThemeCard };
