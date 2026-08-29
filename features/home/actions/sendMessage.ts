"use server"

import { ActionState, fromErrorToActionState, toActionState } from "@/components/form/utils/to-action-state";
import * as z from "zod";

const sendMessageSchema = z.object({
    name: z.string().min(1, "Is required").max(50, "Name should be less that 50 chars"),
    email: z.email().min(1, 'Is required'),
    message: z.string().min(1, 'Is required').max(500, "Max 500 chars are allowed"),
})

export async function sendMesasge(_actionState: ActionState, formData: FormData) {
    try {
        const { name, email, message } = sendMessageSchema.parse(Object.fromEntries(formData));
        console.log(name, email, message);

    } catch (error) {
        return fromErrorToActionState(error, formData);
    }
    return toActionState("SUCCESS", "Message send successfully!")
}