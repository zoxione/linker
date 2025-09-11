"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { OTP_LENGTH } from "@repo/api";
import { Button } from "@repo/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@repo/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@repo/ui/input-otp";

import { SimpleError } from "@/shared/errors/simple-error";
import { authClient } from "@/shared/lib/auth-client";
import { displayError } from "@/shared/utils/display-error";
import { genArray } from "@/shared/utils/gen-array";
import { getAuthError } from "@/shared/utils/get-auth-error";
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

  const handleSubmit = async (values: AuthOtpFormSchema) => {
    try {
      setLoading(true);
      const { error } = await authClient.signIn.emailOtp({
        email: formData.email,
        otp: values.otp,
      });
      if (error) {
        throw new SimpleError(getAuthError(error.code) ?? "Не удалось выполнить вход");
      }
      setFormData({ ...formData, ...values });
      router.push("/dashboard");
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
          name="otp"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <InputOTP
                  maxLength={OTP_LENGTH}
                  pattern={REGEXP_ONLY_DIGITS}
                  containerClassName="w-full"
                  {...field}
                  onChange={(value) => {
                    field.onChange(value);
                    if (value.length === OTP_LENGTH) {
                      form.handleSubmit(handleSubmit)();
                    }
                  }}
                >
                  <InputOTPGroup className="w-full">
                    {genArray(OTP_LENGTH).map((_, index) => (
                      <InputOTPSlot key={index} index={index} className="h-14 w-full text-2xl font-medium" />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="button" variant="secondary" loading={loading}>
          Отправить повторно
        </Button>
      </form>
    </Form>
  );
};

export { AuthOtpForm };
