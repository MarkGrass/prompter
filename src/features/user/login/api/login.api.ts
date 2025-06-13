import { postToApi } from 'shared/api';

import type { LoginRequest, LoginResponse } from '../model/login.types';

export const loginApi = async (data: LoginRequest) => {
    const response = await postToApi<LoginResponse>({ url: '/api/v1/login', data });

    return response.data;
};
