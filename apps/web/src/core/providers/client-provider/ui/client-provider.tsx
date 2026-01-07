"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

import { Toaster } from "@repo/ui/toast";
import { TooltipProvider } from "@repo/ui/tooltip";

import { queryClient } from "@/shared/lib/query-client";

import { DialogProvider } from "../../dialog-provider";

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <TooltipProvider>
          <DialogProvider>
            {children}
            <Toaster />
            <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-right" />
          </DialogProvider>
        </TooltipProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  );
};

export { ClientProvider };
