"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@repo/ui/components/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/components/form";
import { Icons } from "@repo/ui/components/icons";
import { Input } from "@repo/ui/components/input";

import { zodResolver } from "@hookform/resolvers/zod";

import { authEmailFormSchema, AuthEmailFormSchema } from "../model/auth.schemas";
import { AuthFormStep } from "../model/auth.types";

interface AuthEmailFormProps {
  setStep: (step: AuthFormStep) => void;
}

const AuthEmailForm = ({ setStep }: AuthEmailFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<AuthEmailFormSchema>({
    resolver: zodResolver(authEmailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: AuthEmailFormSchema) => {
    try {
      setLoading(true);
      setStep("otp");
    } catch (error) {
      // await displayError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Введите электронную почту</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} type="submit">
          {loading ? <Icons.loading className="mr-2 h-4 w-4 animate-spin" /> : null}
          Войти
        </Button>
      </form>
    </Form>
  );
};

export { AuthEmailForm };
