"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@repo/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Skeleton } from "@repo/ui/components/skeleton";

import { SimpleError } from "@/shared/errors/simple-error";
import { authClient } from "@/shared/lib/auth-client";
import { displayError } from "@/shared/utils/display-error";

interface LogoutBlockProps {}

const LogoutBlock = ({}: LogoutBlockProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    try {
      setLoading(true);
      const { error } = await authClient.signOut();
      if (error) {
        throw new SimpleError(error.message || "Не удалось выполнить выход");
      }
      router.push("/");
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
        <Button onClick={handleLogout} loading={loading} variant="destructive">
          Выйти из аккаунта
        </Button>
      </CardContent>
    </Card>
  );
};

export { LogoutBlock };
