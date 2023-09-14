import { Button as ButtonMT } from "@components/MaterialTailwind";
import { children } from "@/types";
import { classNames } from "@utils/utils";

interface ButtonProps {
  children: children;
  className?: string;
  [key: string]: any;
}

export default function Button({
  onClick,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <ButtonMT
      variant="outlined"
      className={classNames("rounded-2xl", className)}
      {...rest}
    >
      {children}
    </ButtonMT>
  );
}
