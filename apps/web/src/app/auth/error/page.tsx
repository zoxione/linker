import Link from "next/link";

import { buttonVariants } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons";
import { cn } from "@repo/ui/utils/cn";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function AuthErrorPage({ searchParams }: PageProps) {
  const { error } = await searchParams;

  const getErrorPretty = (error: string | string[] | undefined): string => {
    if (error === "account_not_linked") {
      return "Аккаунт, через который вы пытаетесь войти, имеет электронную почту, которая уже зарегистрирована. Пожалуйста, используйте другой аккаунт.";
    }
    return "Возникла неизвестная ошибка";
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-5">
      <Icons.shield className="text-primary size-10" />
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-xl font-semibold">Ошибка авторизации</h1>
        <p className="text-muted-foreground text-sm">{getErrorPretty(error)}</p>
      </div>
      <Link href="/auth" className={cn(buttonVariants({}))}>
        Вернуться
      </Link>
    </div>
  );
}
