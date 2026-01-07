"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@repo/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/form";
import { Icons } from "@repo/ui/icons";
import { Input } from "@repo/ui/input";
import { toast } from "@repo/ui/toast";

import { QUERY_KEYS } from "@/core/data/constants";
import { Link } from "@/entities/link/model/link.types";
import { usePutApiCustomerLinksId } from "@/shared/api";
import { displayError } from "@/shared/utils/display-error";

import { toUpdateLinkAPI, toUpdateLinkValues } from "../model/update-link.mappers";
import { UpdateLinkFormSchema, updateLinkFormSchema } from "../model/update-link.schemas";

interface UpdateLinkFormProps {
  link: Link;
}

const UpdateLinkForm = ({ link }: UpdateLinkFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const { mutateAsync: updateLink } = usePutApiCustomerLinksId({
    mutation: {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.LINKS] });
      },
    },
  });

  const form = useForm<UpdateLinkFormSchema>({
    resolver: zodResolver(updateLinkFormSchema),
    defaultValues: toUpdateLinkValues(link),
  });

  const handleSubmit = async (values: UpdateLinkFormSchema) => {
    try {
      setLoading(true);
      const res = await updateLink({
        id: link.id,
        data: toUpdateLinkAPI(values),
      });
      form.reset(toUpdateLinkValues(res));
      toast.success({ description: "Ссылка обновлена" });
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
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1.5">
                <Icons.lock className="size-3" />
                URL
              </FormLabel>
              <FormControl>
                <Input type="url" placeholder="URL" disabled readOnly {...field} />
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
              <FormLabel className="flex items-center gap-1.5">
                <Icons.lock className="size-3" />
                URL перенаправления
              </FormLabel>
              <FormControl>
                <Input type="url" placeholder="URL перенаправления" disabled readOnly {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="createdAt"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1.5">
                <Icons.lock className="size-3" />
                Дата создания
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Дата создания" disabled readOnly {...field} />
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

export { UpdateLinkForm };
