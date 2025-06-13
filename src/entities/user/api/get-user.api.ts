import { postToApi } from 'shared/api';

export const getUserApi = async () => {
    const response = await postToApi({
        url: '/api/v1/profile',
    });

    return response.data;
};
