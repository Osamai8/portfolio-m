import { useEffect, useRef } from 'react';
import { ActionState } from '../utils/to-action-state';
type OnArgs = {
    actionState: ActionState
}

type UseActionOptionProps = {
    onSuccess?: (_onArgs: OnArgs) => void;
    onError?: (_onArgs: OnArgs) => void;
}

const useActionFeedback = (
    actionState: ActionState,
    options: UseActionOptionProps
) => {
    useEffect(() => {
        if (actionState.status === "SUCCESS") {
            options.onSuccess?.({ actionState });
        }

        if (actionState.status === "ERROR") {
            options.onError?.({ actionState });
        }
    }, [actionState.timestamp]);
};

export { useActionFeedback }