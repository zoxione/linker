"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";

import { authClient } from "@/shared/lib/auth-client";

import { UpdateUserForm } from "./update-user-form";
import { UpdateUserFormSkeleton } from "./update-user-form.skeleton";

interface UpdateUserCardProps {}

const UpdateUserCard = ({}: UpdateUserCardProps) => {
  const { data: session } = authClient.useSession();

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Данные аккаунта</CardTitle>
      </CardHeader>
      <CardContent>{session ? <UpdateUserForm user={session.user} /> : <UpdateUserFormSkeleton />}</CardContent>
    </Card>
  );
};

export { UpdateUserCard };
