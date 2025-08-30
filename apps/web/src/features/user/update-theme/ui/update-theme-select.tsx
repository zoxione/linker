"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import { Skeleton } from "@repo/ui/components/skeleton";

interface UpdateThemeSelectProps {}

const UpdateThemeSelect = ({}: UpdateThemeSelectProps) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChangeTheme = (theme: string) => {
    setTheme(theme);
  };

  if (!mounted) {
    return <Skeleton className="h-9 w-full" />;
  }

  return (
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
  );
};

export { UpdateThemeSelect };
