import React from 'react'
import { toast } from 'sonner';
import { useActionFeedback } from './hooks/useActionFeedback';
import { ActionState } from './utils/to-action-state';

type FormProps<T = unknown> = {
    action: (_payload: FormData) => void;
    children: React.ReactNode;
    actionState: ActionState;
    onSuccess?: (_actionState: ActionState<T>) => void;
    onError?: (_actionState: ActionState<T>) => void;
}
const Form = ({ action, children, actionState, onSuccess, onError }: FormProps) => {
    useActionFeedback(actionState, {
        onSuccess: ({ actionState }) => {
            if (actionState.message) {
                toast.success(actionState.message);
            }
            onSuccess?.(actionState);
        },
        onError: ({ actionState }) => {
            if (actionState.message) {
                toast.error(actionState.message);
            }
            onError?.(actionState);
        },
    });
    return (
        <form action={action} className="flex flex-col gap-4.25">
            {children}
        </form>
    )
}

export { Form };