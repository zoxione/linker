import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { emailOTP } from "better-auth/plugins";
import { customAlphabet } from "nanoid";

import { config } from "../config";
import { db, dbSchema } from "../persistence/db";
import { OTP_LENGTH } from "./constants";

const auth = betterAuth({
  socialProviders: {
    github: {
      clientId: config.githubClientId,
      clientSecret: config.githubClientSecret,
    },
    google: {
      clientId: config.googleClientId,
      clientSecret: config.googleClientSecret,
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: dbSchema.user,
      session: dbSchema.session,
      account: dbSchema.account,
      verification: dbSchema.verification,
    },
  }),
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          return {
            data: {
              ...user,
              name: user.name || user.email.split("@")[0],
            },
          };
        },
      },
    },
  },
  account: {
    accountLinking: {
      enabled: false,
    },
  },
  user: {
    deleteUser: {
      enabled: true,
    },
  },
  plugins: [
    emailOTP({
      otpLength: OTP_LENGTH,
      generateOTP: () => {
        if (!config.production) {
          return "1".repeat(OTP_LENGTH);
        }
        const otp = customAlphabet("1234567890", OTP_LENGTH)();
        return otp;
      },
      async sendVerificationOTP({ email, otp, type }) {
        // TODO
      },
    }),
  ],
  advanced: {
    database: {
      generateId: false,
    },
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
