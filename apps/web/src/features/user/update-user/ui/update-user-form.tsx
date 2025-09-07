"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/components/icons";
import { toast } from "@repo/ui/components/toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/form";
import { Input } from "@repo/ui/input";

import { User } from "@/entities/user/model/user.types";
import { SimpleError } from "@/shared/errors/simple-error";
import { authClient } from "@/shared/lib/auth-client";
import { Avatar } from "@/shared/ui/avatar";
import { displayError } from "@/shared/utils/display-error";
import { getAuthError } from "@/shared/utils/get-auth-error";
import { zodResolver } from "@hookform/resolvers/zod";

import { toUpdateUserAPI, toUpdateUserValues } from "../model/update-user.mappers";
import { UpdateUserFormSchema, updateUserFormSchema } from "../model/update-user.schemas";

interface UpdateUserFormProps {
  user: User;
}

const UpdateUserForm = ({ user }: UpdateUserFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<UpdateUserFormSchema>({
    resolver: zodResolver(updateUserFormSchema),
    defaultValues: toUpdateUserValues(user),
  });

  const handleSubmit = async (values: UpdateUserFormSchema) => {
    try {
      setLoading(true);
      const { error } = await authClient.updateUser(toUpdateUserAPI(values));
      if (error) {
        throw new SimpleError(getAuthError(error.code) ?? "Не удалось обновить профиль");
      }
      form.reset(toUpdateUserValues({ ...user, ...values }));
      toast.success({ description: "Профиль обновлен" });
    } catch (error) {
      await displayError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4">
        <Avatar name={user.email} className="size-40" />
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
