import nodemailer from "nodemailer";

import { config } from "../../config";

const transporter = nodemailer.createTransport({
  host: config.smtpHost,
  port: config.smtpPort,
  secure: true,
  auth: {
    user: config.smtpUser,
    pass: config.smtpPassword,
  },
});

export { transporter };
