import type { FieldValues, Path, ControllerRenderProps } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";

import {
  FormDescription,
  FormMessage,
  FormField as FormFieldUI,
} from "../ui/form";
import { FormControl } from "../ui/form";
import { FormLabel } from "../ui/form";
import { FormItem } from "../ui/form";


export type FormFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T, any>;
  name: Path<T>;
  label: string;
  description?: string;
  fieldItemClassName?: string;
  children: (field: ControllerRenderProps<T, Path<T>>) => React.ReactNode;
};

export function FormField<T extends FieldValues>({
  form,
  name,
  label,
  description,
  fieldItemClassName,
  children,
}: FormFieldProps<T>) {
  return (
    <FormFieldUI
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={fieldItemClassName}>
          <FormLabel>{label}</FormLabel>
          <FormControl>{children(field)}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
