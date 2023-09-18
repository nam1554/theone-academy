import type { UseFormRegisterReturn } from "react-hook-form";
import { Input as InputMT } from "@components/MaterialTailwind";
import { classNames } from "@utils/utils";

interface InputProps {
  kind: "text" | "file";
  name: string;
  label: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

export default function Input({
  kind,
  name,
  label,
  register,
  required = false,
  placeholder = "",
  className = "",
}: InputProps) {
  return (
    <>
      {kind === "text" ? (
        <InputMT
          id={name}
          required={required}
          {...register}
          variant="static"
          label={label}
          placeholder={placeholder}
          labelProps={{
            className: "!text-16pxr peer-placeholder-shown:text-gray-600",
          }}
          className={classNames(
            "placeholder-shown:rounded-none placeholder-shown:border-0 placeholder-shown:border-b placeholder-shown:border-b-gray-600",
            "border-b-gray-500 appearance-none !text-16pxr",
            className
          )}
          crossOrigin=""
        />
      ) : null}
      {kind === "file" ? (
        <InputMT
          id={name}
          required={required}
          type="file"
          accept="audio/*, video/*, image/*"
          {...register}
          variant="static"
          label={label}
          placeholder={placeholder}
          labelProps={{
            className: "!text-16pxr peer-placeholder-shown:text-gray-600",
          }}
          className={classNames(
            "placeholder-shown:rounded-none placeholder-shown:border-0",
            "!border-0 appearance-none !text-16pxr",
            className
          )}
          crossOrigin=""
        />
      ) : null}
    </>
  );
}
