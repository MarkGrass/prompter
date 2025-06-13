import { getFromApi } from 'shared/api';

import type { DialogsRequest, DialogsResponse } from '../model/dialogs.types';

export const getDialogsApi = async (params: DialogsRequest) => {
    const response = await getFromApi<DialogsResponse>({
        url: '/api/v1/dialog',
        params,
    });

    return response.data;
};
