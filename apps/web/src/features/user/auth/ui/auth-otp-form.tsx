"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@repo/ui/components/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@repo/ui/components/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@repo/ui/components/input-otp";

import { zodResolver } from "@hookform/resolvers/zod";

import { authOtpFormSchema, AuthOtpFormSchema } from "../model/auth.schemas";
import { AuthFormStep } from "../model/auth.types";

interface AuthOtpFormProps {
  setStep: (step: AuthFormStep) => void;
}

const AuthOtpForm = ({ setStep }: AuthOtpFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<AuthOtpFormSchema>({
    resolver: zodResolver(authOtpFormSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (values: AuthOtpFormSchema) => {
    try {
      setLoading(true);
      router.push("/");
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
          name="otp"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <InputOTP maxLength={5} containerClassName="w-full" {...field}>
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
        <Button disabled={loading} type="button" variant="secondary">
          Отправить повторно
        </Button>
      </form>
    </Form>
  );
};

export { AuthOtpForm };
