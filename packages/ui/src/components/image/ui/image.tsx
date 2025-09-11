import * as React from "react";

import { cn } from "../../../utils/cn";

const placeholder = () => `
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#e6e6e6">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
  </svg>
`;

const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  lazy?: boolean;
  className?: string;
}

const Image = ({ src, alt, width, height, fill, lazy = true, className }: ImageProps) => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  return (
    <img
      src={!isLoaded ? `data:image/svg+xml;base64,${toBase64(placeholder())}` : src}
      alt={alt}
      onLoad={() => setIsLoaded(true)}
      width={width}
      height={height}
      loading={lazy ? "lazy" : "eager"}
      className={cn(
        `transition-opacity`,
        !isLoaded ? "opacity-0" : "",
        fill ? "absolute inset-0 size-full" : "",
        className,
      )}
    />
  );
};

export { Image, type ImageProps };
