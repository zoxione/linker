"use client";

import { useTheme } from "next-themes";

import { ClientOnly } from "@repo/ui/client-only";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/select";
import { Skeleton } from "@repo/ui/skeleton";

interface ToggleThemeSelectProps {}

const ToggleThemeSelect = ({}: ToggleThemeSelectProps) => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = (theme: string) => {
    setTheme(theme);
  };

  return (
    <ClientOnly fallback={<Skeleton className="h-9 w-full" />}>
      <Select defaultValue={theme} onValueChange={handleChangeTheme}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Выберите тему" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Темы</SelectLabel>
            <SelectItem value="light">Светлая</SelectItem>
            <SelectItem value="dark">Темная</SelectItem>
            <SelectItem value="system">Системная</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </ClientOnly>
  );
};

export { ToggleThemeSelect };
