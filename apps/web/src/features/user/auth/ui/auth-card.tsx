"use client";

import { useState } from "react";

import { Button } from "@repo/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Icons } from "@repo/ui/components/icons";

import { displayError } from "@/shared/utils/display-error";

import { useAuth } from "../model/use-auth";
import { AuthEmailForm } from "./auth-email-form";
import { AuthOtpForm } from "./auth-otp-form";

interface AuthCardProps {}

const AuthCard = ({}: AuthCardProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { step, setStep } = useAuth();

  const onAuthProvider = async (provider: string) => {
    try {
      setLoading(true);
    } catch (error) {
      await displayError(error);
    } finally {
      setLoading(false);
    }
  };

  const AUTH_CARD_STEPS = {
    email: {
      header: (
        <>
          <CardTitle className="text-2xl font-bold">Авторизация</CardTitle>
          <CardDescription>Войдите в свой аккаунт или зарегистрируйте новый</CardDescription>
        </>
      ),
      content: (
        <>
          <AuthEmailForm />
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">Или</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Button
              onClick={() => onAuthProvider("github")}
              disabled={loading}
              type="button"
              variant="outline"
              className="w-full"
            >
              <Icons.github />
            </Button>
            <Button
              onClick={() => onAuthProvider("google")}
              disabled={loading}
              type="button"
              variant="outline"
              className="w-full"
            >
              <Icons.google />
            </Button>
            <Button
              onClick={() => onAuthProvider("vk")}
              disabled={loading}
              type="button"
              variant="outline"
              className="w-full"
            >
              <Icons.vk />
            </Button>
          </div>
        </>
      ),
    },
    otp: {
      header: (
        <>
          <CardTitle className="text-2xl font-bold">Введите код из письма</CardTitle>
          <CardDescription>Мы отправили письмо на введенный вами адрес электронной почты</CardDescription>
          <Button onClick={() => setStep("email")} variant="ghost" size="icon" className="absolute left-5 top-6">
            <Icons.left className="h-4 w-4" />
          </Button>
        </>
      ),
      content: (
        <>
          <AuthOtpForm />
        </>
      ),
    },
  };

  return (
    <Card>
      <CardHeader className="relative flex flex-col items-center text-center">
        {AUTH_CARD_STEPS[step].header}
      </CardHeader>
      <CardContent className="flex flex-col gap-6">{AUTH_CARD_STEPS[step].content}</CardContent>
    </Card>
  );
};

export { AuthCard };
