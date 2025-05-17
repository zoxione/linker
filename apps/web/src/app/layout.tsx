import { ReactNode } from "react";

import "@repo/ui/globals.css";

import { ClientProvider } from "@/core/providers/client-provider";

import { inter } from "../core/styles/font";
import "../core/styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} mx-auto max-w-screen-xl px-4 font-sans antialiased`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
