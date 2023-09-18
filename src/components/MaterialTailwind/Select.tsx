import {
  Select as SelectMT,
  Option as OptionMT,
} from "@components/MaterialTailwind";
import { classNames } from "@utils/utils";
import {
  Control,
  FieldValues,
  RegisterOptions,
  useController,
} from "react-hook-form";

interface SelectProps {
  name: string;
  label: string;
  control: Control<any>;
  rules:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  labels: string[];
  values: string[];
  defaultValue?: string;
  className?: string;
}

export default function Select({
  name,
  label,
  control,
  rules,
  labels,
  values,
  defaultValue,
  className = "",
}: SelectProps) {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({ name, control, rules, defaultValue });
  return (
    <SelectMT
      id={name}
      {...field}
      variant="static"
      label={label}
      labelProps={{
        className: "!text-16pxr",
      }}
      className={classNames("!text-16pxr", className)}
    >
      {labels.length > 0 && values.length > 0 && labels.length === values.length
        ? labels.map((item, index) => (
            <OptionMT key={index} value={values[index]}>
              {item}
            </OptionMT>
          ))
        : null}
    </SelectMT>
  );
}
