"use client";

import { useState } from "react";
import { Button, IconButton } from "@components/MaterialTailwind";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function BoardPagination() {
  const [active, setActive] = useState(1);

  const getItemProps = (index: number) =>
    ({
      variant: "text",
      color: "gray",
      className:
        active === index
          ? "!text-14pxr !font-extrabold !bg-transparent"
          : "!text-13pxr !font-normal !text-gray-600",
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex items-center md:gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
      <div className="flex items-center gap-1 md:gap-2">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 5}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
