import { Children, ReactElement, cloneElement } from "react";
import CardItem, { CardItemProps } from "./CardItem";
import { classNames } from "@utils/utils";

interface CardListProps {
  children: Array<ReactElement<CardItemProps>> | ReactElement<CardItemProps>;
  columns?: 2 | 3 | 4;
  mdColumns?: 2 | 3 | 4;
  lgColumns?: 2 | 3 | 4;
  labelBgClassName?: string;
}

const CardList = Object.assign(
  ({
    children,
    columns = 3,
    mdColumns,
    lgColumns,
    labelBgClassName,
  }: CardListProps) => {
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
            : "",
          mdColumns === 2
            ? "md:grid-cols-2"
            : mdColumns === 3
            ? "md:grid-cols-3"
            : mdColumns === 4
            ? "md:grid-cols-4"
            : "",
          lgColumns === 2
            ? "lg:grid-cols-2"
            : lgColumns === 3
            ? "lg:grid-cols-3"
            : lgColumns === 4
            ? "lg:grid-cols-4"
            : ""
        )}
      >
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            ...child.props,
            labelText: child.props.labelText || `${index + 1}회차`,
            labelBgClassName: child.props.labelBgClassName || labelBgClassName,
          })
        )}
      </div>
    );
  },
  { CardItem }
);

export default CardList;
