"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@repo/ui/components/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/components/form";
import { Icons } from "@repo/ui/components/icons";
import { Input } from "@repo/ui/components/input";

import { QueryKeys } from "@/core/data/constants";
import { Link } from "@/entities/link/model/link.types";
import { usePutApiCustomerLinksId } from "@/shared/api";
import { displayError } from "@/shared/utils/display-error";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";

import { UpdateLinkFormSchema, updateLinkFormSchema } from "../model/update-link.schemas";

interface UpdateLinkFormProps {
  link: Link;
  onSuccess: () => void;
}

const UpdateLinkForm = ({ link, onSuccess }: UpdateLinkFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const { mutateAsync: updateLink } = usePutApiCustomerLinksId();

  const form = useForm<UpdateLinkFormSchema>({
    resolver: zodResolver(updateLinkFormSchema),
    defaultValues: {
      name: link.name,
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
      form.reset({ name: res.name });
      toast.success("Ссылка обновлена");
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
        <Button disabled={loading} type="submit">
          {loading ? <Icons.loading className="mr-2 h-4 w-4 animate-spin" /> : null}
          Обновить ссылку
        </Button>
      </form>
    </Form>
  );
};

export { UpdateLinkForm };
