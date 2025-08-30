"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface InfiniteScrollContainerProps {
  children: ReactNode;
  onBottom: () => void;
}

const InfiniteScrollContainer = ({ children, onBottom }: InfiniteScrollContainerProps) => {
  const { ref } = useInView({
    rootMargin: "50px",
    onChange(inView) {
      if (inView) {
        onBottom();
      }
    },
  });

  return (
    <>
      {children}
      <div ref={ref} />
    </>
  );
};

export { InfiniteScrollContainer };
