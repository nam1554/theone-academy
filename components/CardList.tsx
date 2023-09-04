import { ReactElement } from "react";
import { MenuBoxButtonProps } from "./MenuBoxButton";
import CardItem from "./CardItem";
import { classNames } from "@/utils/utils";

interface CardListProps {
  children:
    | Array<ReactElement<MenuBoxButtonProps>>
    | ReactElement<MenuBoxButtonProps>;
  columns?: 2 | 3 | 4 | "3 lg:4" | "3 md:4";
}

const CardList = Object.assign(
  ({ children, columns = 3 }: CardListProps) => {
    return (
      <div
        className={classNames(
          "grid gap-y-3 mt-30pxr px-5pxr",
          columns === 2
            ? "grid-cols-2"
            : columns === 3
            ? "grid-cols-3"
            : columns === 4
            ? "grid-cols-4"
            : columns === "3 lg:4"
            ? "grid-cols-3 lg:grid-cols-4"
            : "grid-cols-3 md:grid-cols-4"
        )}
      >
        {children}
      </div>
    );
  },
  { CardItem }
);

export default CardList;
