import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { emailOTP } from "better-auth/plugins";
import { customAlphabet } from "nanoid";

import { config } from "../config";
import { db } from "../persistence/db";
import { account, session, user, verification } from "../persistence/db/schema";

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      session,
      account,
      verification,
    },
  }),
  plugins: [
    emailOTP({
      otpLength: 5,
      generateOTP: () => {
        if (config.production === 0) {
          return "11111";
        }
        const otp = customAlphabet("1234567890", 5)();
        return otp;
      },
      async sendVerificationOTP({ email, otp, type }) {
        // TODO
      },
    }),
  ],
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      domain: config.domainUrl,
    },
    defaultCookieAttributes: {
      secure: true,
      httpOnly: true,
      sameSite: "none",
      partitioned: true,
    },
  },
  trustedOrigins: [config.apiAppUrl, config.webAppUrl],
});

type Auth = typeof auth;
type Session = typeof auth.$Infer.Session.session;
type User = typeof auth.$Infer.Session.user;

export { auth, type Auth, type Session, type User };
