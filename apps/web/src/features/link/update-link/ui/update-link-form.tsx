"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@repo/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/form";
import { Icons } from "@repo/ui/icons";
import { Input } from "@repo/ui/input";

import { QueryKeys } from "@/core/data/constants";
import { useDialog } from "@/core/providers/dialog-provider";
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
  const { onOpen } = useDialog();

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
        <div className="flex items-center gap-2">
          <Button loading={loading} type="submit" className="flex-1">
            Обновить ссылку
          </Button>
          <Button
            onClick={() =>
              onOpen({
                type: "delete-link",
                props: { link },
              })
            }
            loading={loading}
            type="button"
            variant="secondary"
            size="icon"
          >
            <Icons.delete />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { UpdateLinkForm };
