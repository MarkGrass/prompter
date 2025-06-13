import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate, useUnit } from 'effector-react';

import { persist } from 'effector-storage/local';

import { setAuthToken, setLogoutInterceptor, useEventSubscription } from 'shared/api';

import { getUserApi } from '../api/get-user.api';

export const userGate = createGate();

export const authTokenSet = createEvent<{ jwt: string }>('authTokenSet');
export const userLoggedOut = createEvent();

setLogoutInterceptor(userLoggedOut);

const setAuthTokenFx = createEffect('setAuthTokenFx', {
    handler: (token: string) => {
        setAuthToken(token);
    },
});

const getUserFx = createEffect('getUserFx', {
    handler: getUserApi,
});

export const $userAuth = createStore<string>('');
export const $isAuthorized = $userAuth.map((jwt) => Boolean(jwt));
export const $user = createStore<string>('');

persist({
    store: $userAuth,
    key: 'auth_token',
});

sample({
    clock: authTokenSet,
    filter: (token) => Boolean(token),
    fn: (data) => data.jwt,
    target: [setAuthTokenFx, $userAuth],
});

sample({
    clock: [userGate.open, $userAuth],
    source: $userAuth,
    fn: (_, token) => token,
    target: getUserFx,
});

$user.on(getUserFx.doneData, (_, data) => data);

export const useUserErrorHandler = (cb: () => void) => {
    useEventSubscription(getUserFx.fail, cb);
};

export const userSelectors = {
    useIsAuthorized: () => useUnit($isAuthorized),
    useUser: () => useUnit($user),
};
