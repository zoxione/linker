"use client";

import { ReactNode, useLayoutEffect, useState } from "react";

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const ClientOnly = ({ children, fallback = null }: ClientOnlyProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return fallback;

  return children;
};

export { ClientOnly };
