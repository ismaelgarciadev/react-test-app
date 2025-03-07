import type { User } from "types";

import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateUser, createUser } from "~/lib/api/usersApi";

import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { InputField } from "~/components/form/InputField";
import { CheckboxField } from "~/components/form/checkboxField";

type UserFormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  isActive: z.boolean(),
});

export function UserForm({ user }: { user?: User }) {

  const queryClient = useQueryClient();

  // TODO: refactor to custom hook
  const mutation = useMutation({
    mutationFn: (data: UserFormSchema) => user? updateUser({id: user.id, ...data}) : createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      // TODO: handle error
      console.error(error);
    },
  });

  const form = useForm<UserFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name || ""  ,
      email: user?.email || "",
      isActive: user?.isActive || false,
    },
  });
  
  const onSubmit = useCallback(function onSubmit(values: UserFormSchema) {
    mutation.mutate(values);
  }, [mutation]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputField form={form} name="name" label="Name" />
        <InputField form={form} name="email" label="Email" description="This is your email address" inputProps={{ type: "email" }} />
        <CheckboxField form={form} name="isActive" label="Is Active" />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
