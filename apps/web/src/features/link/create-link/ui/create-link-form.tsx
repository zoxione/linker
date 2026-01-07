"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@repo/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { toast } from "@repo/ui/toast";

import { QUERY_KEYS } from "@/core/data/constants";
import { usePostApiCustomerLinks } from "@/shared/api";
import { displayError } from "@/shared/utils/display-error";

import { toCreateLinkAPI, toCreateLinkValues } from "../model/create-link.mappers";
import { CreateLinkFormSchema, createLinkFormSchema } from "../model/create-link.schemas";

interface CreateLinkFormProps {
  onSuccess?: () => void;
}

const CreateLinkForm = ({ onSuccess }: CreateLinkFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const { mutateAsync: createLink } = usePostApiCustomerLinks({
    mutation: {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.LINKS] });
      },
    },
  });

  const form = useForm<CreateLinkFormSchema>({
    resolver: zodResolver(createLinkFormSchema),
    defaultValues: toCreateLinkValues(),
  });

  const handleSubmit = async (values: CreateLinkFormSchema) => {
    try {
      setLoading(true);
      await createLink({
        data: toCreateLinkAPI(values),
      });
      form.reset(toCreateLinkValues());
      toast.success({ description: "Ссылка создана" });
      onSuccess?.();
    } catch (error) {
      await displayError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
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
              <FormLabel>URL перенаправления</FormLabel>
              <FormControl>
                <Input type="url" placeholder="URL перенаправления" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!form.formState.isValid} loading={loading}>
          Создать ссылку
        </Button>
      </form>
    </Form>
  );
};

export { CreateLinkForm };
