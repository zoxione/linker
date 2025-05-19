"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@repo/ui/components/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/components/form";
import { Icons } from "@repo/ui/components/icons";
import { Input } from "@repo/ui/components/input";

import { QueryKeys } from "@/core/data/constants";
import { usePostApiCustomerLinks } from "@/shared/api";
import { displayError } from "@/shared/utils/display-error";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";

import { createLinkFormSchema, CreateLinkFormSchema } from "../model/create-link.schemas";

interface CreateLinkFormProps {
  onSuccess: () => void;
}

const CreateLinkForm = ({ onSuccess }: CreateLinkFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const { mutateAsync: createLink } = usePostApiCustomerLinks();

  const form = useForm<CreateLinkFormSchema>({
    resolver: zodResolver(createLinkFormSchema),
    defaultValues: {
      name: "",
      redirectUrl: "",
    },
  });

  const onSubmit = async (values: CreateLinkFormSchema) => {
    try {
      setLoading(true);
      await createLink({
        data: {
          name: values.name,
          redirectUrl: values.redirectUrl,
        },
      });
      form.reset();
      toast.success("Ссылка создана");
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.customer.links] });
      onSuccess();
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
              <FormLabel>Введите название ссылки</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Название" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="redirectUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Введите URL перенаправления</FormLabel>
              <FormControl>
                <Input type="url" placeholder="https://example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} type="submit">
          {loading ? <Icons.loading className="mr-2 h-4 w-4 animate-spin" /> : null}
          Создать ссылку
        </Button>
      </form>
    </Form>
  );
};

export { CreateLinkForm };
