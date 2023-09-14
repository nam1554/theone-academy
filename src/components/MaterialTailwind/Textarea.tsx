import type { UseFormRegisterReturn } from "react-hook-form";
import { Textarea as TextareaMT } from "@components/MaterialTailwind";

interface TextareaProps {
  name: string;
  label: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  resize?: boolean;
}

export default function Textarea({
  name,
  label,
  register,
  required = false,
  placeholder = "",
  rows = 8,
  resize = false,
}: TextareaProps) {
  return (
    <TextareaMT
      id={name}
      required={required}
      {...register}
      variant="static"
      label={label}
      placeholder={placeholder}
      rows={rows}
      resize={resize}
      labelProps={{
        className: "peer-placeholder-shown:text-gray-600",
      }}
      className="placeholder-shown:rounded-none placeholder-shown:border-0 placeholder-shown:border-b placeholder-shown:border-b-gray-600
      border-b-gray-500 appearance-none !text-16pxr"
    />
  );
}
