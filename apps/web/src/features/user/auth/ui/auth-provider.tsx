"use client";

import { ReactNode, useMemo, useState } from "react";

import { AuthContext } from "../model/auth.context";
import { AuthFormData, AuthFormStep } from "../model/auth.types";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
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

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
