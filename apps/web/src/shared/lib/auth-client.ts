import { emailOTPClient, inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

import { Auth } from "@repo/api";

import { clientConfig } from "@/core/config/client-config";

const authClient = createAuthClient({
  baseURL: clientConfig.apiAppUrl,
  plugins: [inferAdditionalFields<Auth>(), emailOTPClient()],
});

export { authClient };
