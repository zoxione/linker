import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";

import { ToggleThemeSelect } from "./toggle-theme-select";

interface ToggleThemeBlockProps {}

const ToggleThemeBlock = ({}: ToggleThemeBlockProps) => {
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

export { ToggleThemeBlock };
