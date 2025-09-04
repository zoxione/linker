import { cookies } from "next/headers";

const getCookieHeader = async (): Promise<Record<string, string>> => {
  const allCookies = (await cookies()).getAll();

  if (!allCookies.length) {
    return {};
  }

  return {
    cookie: allCookies.map(({ name, value }) => `${name}=${value}`).join("; "),
  };
};

export { getCookieHeader };
