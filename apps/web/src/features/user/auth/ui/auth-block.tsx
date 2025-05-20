import { config } from "@/core/data/config";

import { AuthCard } from "./auth-card";
import { AuthProvider } from "./auth-provider";

interface AuthBlockProps {}

const AuthBlock = ({}: AuthBlockProps) => {
  return (
    <AuthProvider>
      <div className="flex w-full max-w-96 flex-col gap-6">
        <AuthCard />
        <div className="text-muted-foreground text-center text-xs">
          Нажимая продолжить, вы соглашаетесь с нашими{" "}
          <a
            href={config.legal.terms}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary underline underline-offset-4"
          >
            Условиями использования
          </a>{" "}
          и{" "}
          <a
            href={config.legal.privacy}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary underline underline-offset-4"
          >
            Политикой конфиденциальности
          </a>
          .
        </div>
      </div>
    </AuthProvider>
  );
};

export { AuthBlock };
