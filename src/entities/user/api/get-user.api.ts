import { getFromApi } from 'shared/api';

import type { User } from '../model/user.types';

export const getUserApi = async () => {
    const response = await getFromApi<User>({
        url: '/v1/profile',
    });

    return response.data;
};
