"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

import { queryClient } from "@/shared/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { DialogProvider } from "../../dialog-provider";
import { Toaster } from "../../toaster";

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <DialogProvider>
          {children}
          <Toaster />
          <ReactQueryDevtools initialIsOpen={false} />
        </DialogProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  );
};

export { ClientProvider };
