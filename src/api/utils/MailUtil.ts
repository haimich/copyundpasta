require("dotenv").config();
import nodemailer from "nodemailer";

const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL_SERVER = process.env.EMAIL_SERVER;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_RECEIVER = process.env.EMAIL_RECEIVER;

export default class MailUtil {

  public static async sendMail(subject, html) {
    let transporter = nodemailer.createTransport({
      host: EMAIL_SERVER,
      port: EMAIL_PORT,
      secure: true,
      auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD,
      }
    });

    try {
      let info = await transporter.sendMail({
        from: `"Copy & Pasta" <${EMAIL_USERNAME}>`,
        to: EMAIL_RECEIVER,
        subject,
        html,
      });
    
      console.log("Message sent: %s", info.messageId);
    } catch (err) {
      console.error("Message failed to send", err);
    }
  }

}