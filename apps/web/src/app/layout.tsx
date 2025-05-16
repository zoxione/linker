import "@repo/ui/globals.css";

import { ClientProvider } from "../core/providers/client-provider/client-provider";
import { inter } from "../core/styles/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
