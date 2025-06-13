import type {
    SnackbarPushMessageCallback} from '@ozen-ui/kit/Snackbar';
import {
    useSnackbar as useOzonSnackbar
} from '@ozen-ui/kit/Snackbar';

export const useSnackbar = () => {
    const { pushMessage, closeMessage } = useOzonSnackbar();

    const pushErrorMessage: SnackbarPushMessageCallback = (params) => {
        return pushMessage({
            status: 'error',
            ...params,
        });
    };

    return { closeMessage, pushErrorMessage, pushMessage };
};
