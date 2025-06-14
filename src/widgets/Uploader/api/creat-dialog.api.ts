import { postToApi } from 'shared/api';

import type {
    CreateDialogRequest,
    CreateDialogResponse,
} from '../model/create-dialog.types';

export const creatDialogApi = async (data: CreateDialogRequest) => {
    const response = await postToApi<CreateDialogResponse>({
        url: '/v1/dialog/full',
        data,
    });

    return response.data;
};
