import { createEffect, createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';

import { persist } from 'effector-storage/local';

import { setAuthToken, setLogoutInterceptor, useEventSubscription } from 'shared/api';

import { getUserApi } from '../api/get-user.api';

import type { User } from './user.types';

export const authTokenSet = createEvent<string>();
export const userLoggedOut = createEvent();

setLogoutInterceptor(userLoggedOut);

const getUserFx = createEffect('getUserFx', {
    handler: getUserApi,
});

const setAuthTokenFx = createEffect('setAuthTokenFx', {
    handler: (token: string) => {
        setAuthToken(token);

        getUserFx();
    },
});

export const $token = createStore<string>('');
export const $isAuthorized = $token.map((token) => Boolean(token));
export const $user = createStore<User | null>(null);

sample({
    clock: authTokenSet,
    target: $token,
});

sample({
    clock: $token,
    filter: (token) => Boolean(token),
    target: setAuthTokenFx,
});

persist({
    store: $token,
    key: 'auth_token',
});

$user.on(getUserFx.doneData, (_, data) => data);

export const useUserErrorHandler = (cb: () => void) => {
    useEventSubscription(getUserFx.fail, cb);
};

export const userSelectors = {
    useIsAuthorized: () => useUnit($isAuthorized),
    useUser: () => useUnit($user),
};
