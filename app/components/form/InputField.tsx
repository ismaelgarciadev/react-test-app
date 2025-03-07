import { Input } from "../ui/input";
import { FormField, type FormFieldProps } from "./field";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

type InputFieldProps<T extends FieldValues> = Omit<FormFieldProps<T>, "children"> & {
  inputProps?: React.ComponentProps<"input">;
};

export function InputField<T extends FieldValues>({ form, name, label, inputProps, description }: InputFieldProps<T>) {
  return (
    <FormField
      form={form}
      name={name}
      label={label}
      description={description}
    >
      {(field) => (
        <Input {...field} {...inputProps} />
      )}
    </FormField>
  )
}
