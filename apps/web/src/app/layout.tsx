import { Metadata } from "next";
import { ReactNode } from "react";

import { ClientProvider } from "@/core/providers/client-provider";

import { inter } from "../core/styles/font";
import "../core/styles/globals.css";

export const metadata: Metadata = {
  title: "Linker",
  description: "Сервис для управления ссылками",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
