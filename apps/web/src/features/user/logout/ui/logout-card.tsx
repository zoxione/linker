"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@repo/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";
import { Skeleton } from "@repo/ui/skeleton";

import { SimpleError } from "@/shared/errors/simple-error";
import { authClient } from "@/shared/lib/auth-client";
import { displayError } from "@/shared/utils/display-error";
import { getAuthError } from "@/shared/utils/get-auth-error";

interface LogoutCardProps {}

const LogoutCard = ({}: LogoutCardProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    try {
      setLoading(true);
      const { error } = await authClient.signOut();
      if (error) {
        throw new SimpleError(getAuthError(error.code) ?? "Не удалось выполнить выход");
      }
      router.push("/auth");
    } catch (error) {
      await displayError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Выйти из аккаунта</CardTitle>
        {session ? (
          <CardDescription>Выход из аккаунта {session.user.email} на этом устройстве</CardDescription>
        ) : (
          <Skeleton className="h-5 w-60" />
        )}
      </CardHeader>
      <CardContent>
        <Button onClick={handleLogout} loading={loading} variant="secondary">
          Выйти из аккаунта
        </Button>
      </CardContent>
    </Card>
  );
};

export { LogoutCard };
