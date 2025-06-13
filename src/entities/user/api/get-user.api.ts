import { postToApi } from 'shared/api';

export const getUserApi = async () => {
    const response = await postToApi({
        url: '/v1/profile',
    });

    return response.data;
}