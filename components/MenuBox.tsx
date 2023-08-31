import { ReactElement } from "react";
import Button, { MenuBoxButtonProps } from "./MenuBoxButton";

interface MenuBoxProps {
  children:
    | Array<ReactElement<MenuBoxButtonProps>>
    | ReactElement<MenuBoxButtonProps>;
}

const MenuBox = Object.assign(
  ({ children }: MenuBoxProps) => {
    return (
      <div className="flex flex-wrap justify-center py-10pxr">{children}</div>
    );
  },
  { Button }
);

export default MenuBox;
