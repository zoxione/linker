import { emailOTPClient, inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

import { Auth } from "@repo/api";

const authClient = createAuthClient({
  baseURL: process.env.API_APP_URL,
  plugins: [inferAdditionalFields<Auth>(), emailOTPClient()],
});

export { authClient };
