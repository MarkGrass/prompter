import { postToApi } from 'shared/api';

import type { SendMessageRequest } from '../model/send-message.types';

export const sendMessageApi = async (data: SendMessageRequest) => {
    const response = await postToApi<void>({
        url: '/v1/dialog_message',
        data,
    });

    return response.data;
};
