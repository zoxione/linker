import { z } from "zod";

const userSchema = z.object({
  email: z.string({ message: "Поле должно быть строкой" }).email({ message: "Неверный формат email" }),
  name: z
    .string({ message: "Поле должно быть строкой" })
    .min(3, { message: "Минимальное количество символов - 3" })
    .max(24, { message: "Максимальное количество символов - 24" }),
  otp: z.string({ message: "Поле должно быть строкой" }),
});

type UserSchema = z.infer<typeof userSchema>;

export { userSchema, type UserSchema };
