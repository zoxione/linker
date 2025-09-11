import { config } from "../../../config";
import { transporter } from "../../../persistence/email";
import { SystemEmailSendVerification } from "./dto/system.email.send-verification";

class SystemEmailService {
  constructor() {}

  async sendVerification(dto: SystemEmailSendVerification): Promise<void> {
    const { email, otp } = dto;

    await transporter.sendMail({
      from: `"Linker" <${config.smtpFromEmail}>`,
      to: email,
      subject: "Подтверждение почты",
      text: `Код подтверждения: ${otp}`,
    });
  }
}

export { SystemEmailService };
