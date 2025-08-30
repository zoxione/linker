import Image from "next/image";

import LogoColor from "@/../public/logo/logo-color.svg";
import LogoMonochrome from "@/../public/logo/logo-monochrome.svg";

interface LogoProps {
  type?: "color" | "monochrome";
  size?: number;
}

const Logo = ({ type = "color", size = 16 }: LogoProps) => {
  return (
    <Image
      src={type === "color" ? LogoColor : LogoMonochrome}
      alt="Logo"
      width={size}
      height={size}
      quality={100}
      priority
    />
  );
};

export { Logo };
