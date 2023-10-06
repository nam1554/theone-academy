import type { UseFormRegisterReturn } from "react-hook-form";
import { Checkbox as CheckboxMT } from "@components/MaterialTailwind";
import { ReactNode } from "react";

interface CheckboxProps {
  name: string;
  label: string | ReactNode;
  register: UseFormRegisterReturn;
  required?: boolean;
  placeholder?: string;
  defaultChecked?: boolean;
  value?: string;
}

export default function Checkbox({
  name,
  label,
  register,
  required = false,
  placeholder = "",
  defaultChecked = false,
  value = undefined,
}: CheckboxProps) {
  return (
    <CheckboxMT
      id={name}
      required={required}
      {...register}
      label={label}
      placeholder={placeholder}
      defaultChecked={defaultChecked}
      ripple={false}
      labelProps={{
        className: "!text-16pxr !-mt-2pxr pl-8pxr",
      }}
      containerProps={{
        className: "p-0",
      }}
      className="p-0 transition-all hover:before:opacity-0 w-4 h-4 before:w-4 before:h-4"
      value={value}
      crossOrigin=""
    />
  );
}
