"use server"

import { ActionState, fromErrorToActionState, toActionState } from "@/components/form/utils/to-action-state";
import { mailerSend } from "@/lib/mailersend";
import { Sender, Recipient, EmailParams } from "mailersend";
import * as z from "zod";
import { sendContactEmail } from "../emails/sendContactEmail";
import { contactReplyEmail } from "../emails/contactReplyEmail";

const sendMessageSchema = z.object({
    name: z.string().min(1, "Is required").max(50, "Name should be less that 50 chars"),
    email: z.email().min(1, 'Is required'),
    message: z.string().min(1, 'Is required').max(500, "Max 500 chars are allowed"),
})

export async function sendMesasge(_actionState: ActionState, formData: FormData) {
    try {
        const { name, email, message } = sendMessageSchema.parse(Object.fromEntries(formData));

        await sendContactEmail(name, email, message);
        await contactReplyEmail(name, email);
    } catch (error) {
        return fromErrorToActionState(error, formData);
    }
    return toActionState("SUCCESS", "Message send successfully!");
}