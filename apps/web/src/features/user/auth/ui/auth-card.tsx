"use client";

import { useState } from "react";

import { Button } from "@repo/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";
import { Icons } from "@repo/ui/icons";

import { clientConfig } from "@/core/config/client-config";
import { SimpleError } from "@/shared/errors/simple-error";
import { authClient } from "@/shared/lib/auth-client";
import { displayError } from "@/shared/utils/display-error";
import { getAuthError } from "@/shared/utils/get-auth-error";

import { useAuth } from "../model/use-auth";
import { AuthEmailForm } from "./auth-email-form";
import { AuthOtpForm } from "./auth-otp-form";

interface AuthCardProps {}

const AuthCard = ({}: AuthCardProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { step } = useAuth();

  const handleOauth = async (provider: string) => {
    try {
      const { error } = await authClient.signIn.social({
        provider,
        callbackURL: `${clientConfig.webAppUrl}/dashboard`,
        errorCallbackURL: `${clientConfig.webAppUrl}/auth/error`,
      });
      if (error) {
        throw new SimpleError(getAuthError(error.code) ?? "Не удалось выполнить вход");
      }
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
              onClick={() => handleOauth("github")}
              loading={loading}
              type="button"
              variant="outline"
              className="flex-1"
            >
              <Icons.github />
            </Button>
            <Button
              onClick={() => handleOauth("google")}
              loading={loading}
              type="button"
              variant="outline"
              className="flex-1"
            >
              <Icons.google />
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
