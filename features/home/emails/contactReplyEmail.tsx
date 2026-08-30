import ContactReplyEmail from "@/emails/contact/ContactReplyEmail";
import { mailerSend } from "@/lib/mailersend";
import { render } from "@react-email/components";
import { Sender, Recipient, EmailParams } from "mailersend";

export const contactReplyEmail = async (
  username: string,
  userEmail: string,
) => {
  const html = await render(
    <ContactReplyEmail name={username} />
  );

  const emailParams = new EmailParams()
    .setFrom(
      new Sender(
        process.env.SENDER_EMAIL as string,
        "Osama Islam"
      )
    )
    .setTo([
      new Recipient(userEmail, username),
    ])
    .setSubject("Thanks for reaching out — Osama")
    .setHtml(html);

  await mailerSend.email.send(emailParams);
}