import { create } from "zustand";

import { AuthEmailFormSchema, AuthOtpFormSchema } from "./auth.schemas";

const DEFAULT_FORM_DATA = {
  email: "",
  otp: "",
};

interface AuthStore {
  formData: AuthEmailFormSchema & AuthOtpFormSchema;
  updateFormData: (data: Partial<AuthEmailFormSchema & AuthOtpFormSchema>) => void;
  resetFormData: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  formData: DEFAULT_FORM_DATA,
  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  resetFormData: () =>
    set(() => ({
      formData: DEFAULT_FORM_DATA,
    })),
}));

export { useAuthStore };
