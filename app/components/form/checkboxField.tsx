import { Checkbox } from "../ui/checkbox";
import { FormField, type FormFieldProps } from "./field";
import type { FieldValues } from "react-hook-form";

type CheckboxFieldProps<T extends FieldValues> = Omit<FormFieldProps<T>, "children"> & {
  inputProps?: React.ComponentProps<typeof Checkbox>;
};

export function CheckboxField<T extends FieldValues>({ form, name, label, inputProps, description }: CheckboxFieldProps<T>) {
  return (
    <FormField
      form={form}
      name={name}
      label={label}
      description={description}
      fieldItemClassName="flex flex-row-reverse items-center gap-2 justify-end"
    >
      {(field) => (
       <Checkbox
       {...inputProps}
       checked={field.value}
       onCheckedChange={field.onChange}
     />
      )}
    </FormField>
  )
}
