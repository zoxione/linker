"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

interface ToasterProps extends React.ComponentProps<typeof Sonner> {}

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return <Sonner theme={theme as ToasterProps["theme"]} position="top-right" className="toaster group" {...props} />;
};

export { Toaster };
