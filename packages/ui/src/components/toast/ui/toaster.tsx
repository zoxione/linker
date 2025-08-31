"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";

import { Icons } from "../../icons";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      position="top-right"
      mobileOffset={0}
      swipeDirections={["left", "right"]}
      visibleToasts={1}
      icons={{
        success: <Icons.success className="text-green-500" />,
        info: <Icons.info className="text-yellow-500" />,
        error: <Icons.error className="text-destructive" />,
      }}
      toastOptions={{
        classNames: {
          toast: "!rounded-none !gap-3 data-[swiped=true]:!rounded-lg md:!rounded-lg",
          icon: "!size-5 !m-0",
          content: "!gap-0",
        },
      }}
      className="toaster group"
      {...props}
    />
  );
};

export { Toaster };
