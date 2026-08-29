import z, { ZodError } from "zod";

export type ActionState<T = unknown> = {
    message: string;
    payload?: FormData;
    fieldErrors: Record<string, string[] | undefined>;
    status?: "SUCCESS" | "ERROR",
    timestamp: number;
    data?: T
}

function flattenFieldErrors(issues: z.core.$ZodIssue[]) {
    const out: Record<string, string[]> = {};

    for (const issue of issues) {
        const key = issue.path.join(".");
        if (!out[key]) out[key] = [];
        out[key].push(issue.message);
    }

    return out;
}

export const EMPTY_ACTION_STATE: ActionState = {
    message: "",
    fieldErrors: {},
    timestamp: Date.now()
}

export const fromErrorToActionState = (error: unknown, formData?: FormData): ActionState => {
    if (error instanceof ZodError) {
        return {
            message: "",
            payload: formData,
            fieldErrors: flattenFieldErrors(error.issues),
            status: "ERROR",
            timestamp: Date.now()
        }
    }
    if (error instanceof Error) {
        return {
            message: error.message,
            payload: formData,
            fieldErrors: {},
            status: "ERROR",
            timestamp: Date.now()
        }
    }
    return {
        message: "An unknown error occured.",
        payload: formData,
        fieldErrors: {},
        status: "ERROR",
        timestamp: Date.now()
    }
}

export const toActionState = (
    status: ActionState['status'],
    message: string,
    payload?: FormData,
    data?: unknown
): ActionState => {
    return { message, fieldErrors: {}, status, timestamp: Date.now(), payload, data }
}