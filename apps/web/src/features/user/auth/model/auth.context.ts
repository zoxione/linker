import { createContext } from "react";

import { AuthFormData, AuthFormStep } from "./auth.types";

interface AuthContextProps {
  step: AuthFormStep;
  setStep: (step: AuthFormStep) => void;
  formData: AuthFormData;
  setFormData: (data: AuthFormData) => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export { AuthContext };
