"use client";

import { classNames } from "@/utils/utils";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export interface MenuBoxButtonProps {
  text: string;
  href?: string;
}

type MenuBoxButton = (props: MenuBoxButtonProps) => ReactNode;

const Button: MenuBoxButton = ({ text, href }) => {
  const pathname = usePathname();
  return (
    <div
      className={classNames(
        "px-10pxr py-5pxr m-2pxr text-14pxr hover:text-white hover:bg-theone-color1 transition duration-700",
        "md:text-16pxr md:px-25pxr lg:text-17pxr lg:px-40pxr",
        href === pathname
          ? "text-white bg-theone-color1"
          : "text-black bg-gray-200",
        href ? "cursor-pointer" : "cursor-default"
      )}
    >
      {href ? <Link href={href}>{text}</Link> : text}
    </div>
  );
};

export default Button;
