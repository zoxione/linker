"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/components/icons";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/form";
import { Input } from "@repo/ui/input";

import { QUERY_KEYS } from "@/core/data/constants";
import { Link } from "@/entities/link/model/link.types";
import { usePutApiCustomerLinksId } from "@/shared/api";
import { displayError } from "@/shared/utils/display-error";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";

import { UpdateLinkFormSchema, updateLinkFormSchema } from "../model/update-link.schemas";

interface UpdateLinkFormProps {
  link: Link;
}

const UpdateLinkForm = ({ link }: UpdateLinkFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const { mutateAsync: updateLink } = usePutApiCustomerLinksId();

  const form = useForm<UpdateLinkFormSchema>({
    resolver: zodResolver(updateLinkFormSchema),
    defaultValues: {
      name: link.name,
      redirectUrl: link.redirectUrl,
      url: link.url,
      createdAt: link.createdAt,
    },
  });

  const onSubmit = async (values: UpdateLinkFormSchema) => {
    try {
      setLoading(true);
      const res = await updateLink({
        id: link.id,
        data: {
          name: values.name,
        },
      });
      // TODO: добавить мапперы
      form.reset({
        name: res.name,
        redirectUrl: res.redirectUrl,
        url: res.url,
        createdAt: res.createdAt,
      });
      toast.success("Ссылка обновлена");
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.LINKS] });
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
                <Input type="text" placeholder="URL" disabled readOnly {...field} />
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
                <Input type="text" placeholder="URL перенаправления" disabled readOnly {...field} />
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
