"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { User } from "@repo/api";
import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/components/icons";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/form";
import { Input } from "@repo/ui/input";

import { QUERY_KEYS } from "@/core/data/constants";
import { SimpleError } from "@/shared/errors/simple-error";
import { authClient } from "@/shared/lib/auth-client";
import { displayError } from "@/shared/utils/display-error";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";

import { UpdateUserFormSchema, updateUserFormSchema } from "../model/update-user.schemas";

interface UpdateUserFormProps {
  user: User;
}

const UpdateUserForm = ({ user }: UpdateUserFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const form = useForm<UpdateUserFormSchema>({
    resolver: zodResolver(updateUserFormSchema),
    defaultValues: {
      email: user.email,
      name: user.name,
    },
  });

  const onSubmit = async (values: UpdateUserFormSchema) => {
    try {
      setLoading(true);
      const { error } = await authClient.updateUser({
        name: values.name,
      });
      if (error) {
        throw new SimpleError(error.message || "Не удалось обновить профиль");
      }
      form.reset({ name: values.name, email: values.email });
      toast.success("Профиль обновлён");
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] });
    } catch (error) {
      await displayError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Имя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1.5">
                <Icons.lock className="size-3" />
                Электронная почта
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="Электронная почта" disabled readOnly {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!form.formState.isDirty} loading={loading} className="w-fit">
          Сохранить изменения
        </Button>
      </form>
    </Form>
  );
};

export { UpdateUserForm };
