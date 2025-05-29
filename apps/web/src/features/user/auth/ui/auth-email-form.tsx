"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@repo/ui/components/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/components/form";
import { Input } from "@repo/ui/components/input";

import { SimpleError } from "@/shared/errors/simple-error";
import { authClient } from "@/shared/lib/auth-client";
import { displayError } from "@/shared/utils/display-error";
import { zodResolver } from "@hookform/resolvers/zod";

import { authEmailFormSchema, AuthEmailFormSchema } from "../model/auth.schemas";
import { useAuth } from "../model/use-auth";

interface AuthEmailFormProps {}

const AuthEmailForm = ({}: AuthEmailFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setStep, formData, setFormData } = useAuth();

  const form = useForm<AuthEmailFormSchema>({
    resolver: zodResolver(authEmailFormSchema),
    defaultValues: {
      email: formData.email,
    },
  });

  const onSubmit = async (values: AuthEmailFormSchema) => {
    try {
      setLoading(true);
      const { data, error } = await authClient.emailOtp.sendVerificationOtp({
        email: values.email,
        type: "sign-in",
      });
      if (error) {
        throw new SimpleError(error.message || "Не удалось отправить код");
      }
      setFormData({ ...formData, ...values });
      setStep("otp");
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
        <Button loading={loading} type="submit">
          Войти
        </Button>
      </form>
    </Form>
  );
};

export { AuthEmailForm };
