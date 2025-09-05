import { User } from "@/entities/user/model/user.types";

import { UpdateUserFormSchema } from "./update-user.schemas";

const toUpdateUserAPI = (values: UpdateUserFormSchema): { name: string } => {
  const { name } = values;

  return {
    name,
  };
};

const toUpdateUserValues = (user: User): UpdateUserFormSchema => {
  const { email, name } = user;

  return {
    email,
    name,
  };
};

export { toUpdateUserAPI, toUpdateUserValues };
