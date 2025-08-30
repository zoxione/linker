"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card";
import { Skeleton } from "@repo/ui/components/skeleton";

import { authClient } from "@/shared/lib/auth-client";

import { UpdateUserForm } from "./update-user-form";

interface UpdateUserBlockProps {}

const UpdateUserBlock = ({}: UpdateUserBlockProps) => {
  const { data: session } = authClient.useSession();

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Данные аккаунта</CardTitle>
      </CardHeader>
      <CardContent>
        {session ? (
          <UpdateUserForm user={session.user} />
        ) : (
          <div className="flex flex-col gap-4">
            <Skeleton className="h-[58px] w-full" />
            <Skeleton className="h-[58px] w-full" />
            <Skeleton className="h-9 w-full" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export { UpdateUserBlock };
