import { emailOTPClient, inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

import { Auth } from "@repo/api";

import { config } from "@/core/config";

const authClient = createAuthClient({
  baseURL: config.apiAppUrl,
  plugins: [inferAdditionalFields<Auth>(), emailOTPClient()],
});

export { authClient };
