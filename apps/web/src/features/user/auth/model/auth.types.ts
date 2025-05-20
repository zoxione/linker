type AuthFormStep = "email" | "otp";

type AuthFormData = {
  email: string;
  otp: string;
};

export { type AuthFormData, type AuthFormStep };
