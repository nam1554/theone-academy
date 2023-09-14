import type { UseFormRegisterReturn } from "react-hook-form";
import { Input as InputMT } from "@components/MaterialTailwind";
import { classNames } from "@utils/utils";

interface InputProps {
  kind: "text" | "phone" | "email";
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
            className: "peer-placeholder-shown:text-gray-700",
          }}
          className={classNames(
            "placeholder-shown:border-b-gray-700 border-b-gray-500 appearance-none",
            className
          )}
          crossOrigin=""
        />
      ) : null}
    </>
  );
}
