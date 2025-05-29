"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@repo/ui/components/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@repo/ui/components/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@repo/ui/components/input-otp";

import { SimpleError } from "@/shared/errors/simple-error";
import { authClient } from "@/shared/lib/auth-client";
import { displayError } from "@/shared/utils/display-error";
import { zodResolver } from "@hookform/resolvers/zod";

import { authOtpFormSchema, AuthOtpFormSchema } from "../model/auth.schemas";
import { useAuth } from "../model/use-auth";

interface AuthOtpFormProps {}

const AuthOtpForm = ({}: AuthOtpFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { formData, setFormData } = useAuth();

  const form = useForm<AuthOtpFormSchema>({
    resolver: zodResolver(authOtpFormSchema),
    defaultValues: {
      otp: formData.otp,
    },
  });

  const onSubmit = async (values: AuthOtpFormSchema) => {
    try {
      setLoading(true);
      const { data, error } = await authClient.signIn.emailOtp({
        email: formData.email,
        otp: values.otp,
      });
      if (error) {
        throw new SimpleError(error.message || "Не удалось выполнить вход");
      }
      setFormData({ ...formData, ...values });
      router.push("/");
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
          name="otp"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <InputOTP
                  maxLength={5}
                  pattern={REGEXP_ONLY_DIGITS}
                  containerClassName="w-full"
                  {...field}
                  onChange={(value) => {
                    field.onChange(value);
                    if (value.length === 5) {
                      form.handleSubmit(onSubmit)();
                    }
                  }}
                >
                  <InputOTPGroup className="w-full">
                    <InputOTPSlot className="h-14 w-full text-2xl font-medium" index={0} />
                    <InputOTPSlot className="h-14 w-full text-2xl font-medium" index={1} />
                    <InputOTPSlot className="h-14 w-full text-2xl font-medium" index={2} />
                    <InputOTPSlot className="h-14 w-full text-2xl font-medium" index={3} />
                    <InputOTPSlot className="h-14 w-full text-2xl font-medium" index={4} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button loading={loading} type="button" variant="secondary">
          Отправить повторно
        </Button>
      </form>
    </Form>
  );
};

export { AuthOtpForm };
