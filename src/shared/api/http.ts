import type { CreateAxiosDefaults, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

import { API_URL } from 'shared/constants';
import { ROUTES } from 'shared/router';

const AUTH_ERROR_CODES = new Set([401]);
const logoutCallbacks: (() => void)[] = [];
const client = axios.create({
    baseURL: API_URL ?? 'https://aihack.mrbelka12000.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
} as CreateAxiosDefaults);

client.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (
            typeof error.response?.status === 'number' &&
            AUTH_ERROR_CODES.has(error.response?.status) &&
            window.location.pathname !== ROUTES.LOGIN
        ) {
            logoutCallbacks.forEach((callback) => callback());
        }

        return Promise.reject(error);
    },
);

export const setLogoutInterceptor = (callback: () => void) => {
    logoutCallbacks.push(callback);
};

export const setAuthToken = (token: string): void => {
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getFromApi = <T = void>(
    config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
    return client.request({
        method: 'GET',
        ...config,
    });
};

export const postToApi = <T = void>(
    config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
    return client.request({
        method: 'POST',
        ...config,
    });
};

export const putToApi = <T = void>(
    config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
    return client.request({
        method: 'PUT',
        ...config,
    });
};

export const patchApi = <T = void>(
    config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
    return client.request({
        method: 'PATCH',
        ...config,
    });
};

export const deleteFromApi = <T = void>(
    config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
    return client.request({
        method: 'DELETE',
        ...config,
    });
};
