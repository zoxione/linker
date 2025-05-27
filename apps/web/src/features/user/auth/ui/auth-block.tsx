"use client";

import { useMemo, useState } from "react";

import { config } from "@/core/data/config";

import { AuthContext } from "../model/auth.context";
import { AuthFormData, AuthFormStep } from "../model/auth.types";
import { AuthCard } from "./auth-card";

interface AuthBlockProps {}

const AuthBlock = ({}: AuthBlockProps) => {
  const [step, setStep] = useState<AuthFormStep>("email");
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    otp: "",
  });

  const contextValue = useMemo(
    () => ({
      step,
      setStep,
      formData,
      setFormData,
    }),
    [step, formData],
  );

  return (
    <AuthContext.Provider value={contextValue}>
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
    </AuthContext.Provider>
  );
};

export { AuthBlock };
