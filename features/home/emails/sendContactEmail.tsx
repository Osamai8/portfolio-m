import { userEmail, userEmail as ownerEmail } from "@/assets/const";
import ContactMessageEmail from "@/emails/contact/ContactMessageEmail";
import { mailerSend } from "@/lib/mailersend";
import { render } from "@react-email/components";
import { Sender, Recipient, EmailParams } from "mailersend";

export const sendContactEmail = async (
    username: string,
    userEmail: string,
    message: string
) => {

    const html = await render(
        <ContactMessageEmail name={username} email={userEmail} message={message} />
    )

    const sentFrom = new Sender(
        process.env.SENDER_EMAIL as string,
        "Osama's Portfolio"
    );

    const recipient = [
        new Recipient(ownerEmail, "Osama")
    ];

    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipient)
        .setSubject(`Portfolio: Message from ${username}`)
        .setHtml(html);

    return await mailerSend.email.send(emailParams);
}