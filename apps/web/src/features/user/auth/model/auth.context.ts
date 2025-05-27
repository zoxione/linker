import { createContext } from "react";

import { AuthFormData, AuthFormStep } from "./auth.types";

type AuthContextType = {
  step: AuthFormStep;
  setStep: (step: AuthFormStep) => void;
  formData: AuthFormData;
  setFormData: (data: AuthFormData) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext };
