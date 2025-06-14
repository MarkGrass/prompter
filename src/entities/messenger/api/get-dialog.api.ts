import { getFromApi } from 'shared/api';

import type { Dialog } from '../model/messenger.types';

export const getDialogApi = async (id: string) => {
    const response = await getFromApi<Dialog>({
        url: `/v1/dialog/${id}`,
    });

    return response.data;
};
