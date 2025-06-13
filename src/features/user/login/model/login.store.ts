import { createEffect, createEvent, sample } from 'effector';
import { useUnit } from 'effector-react';

import { authTokenSet } from 'entities/user';
import { useEventSubscription } from 'shared/api';

import { loginApi } from '../api/login.api';

import type { LoginRequest } from './login.types';

export const loginFormSubmitted = createEvent<LoginRequest>();

const loginFx = createEffect('loginFx', {
    handler: loginApi,
});

sample({
    clock: loginFormSubmitted,
    target: loginFx,
});

sample({
    clock: loginFx.doneData,
    target: authTokenSet,
});

export const useLoginErrorHandler = (cb: () => void) => {
    useEventSubscription(loginFx.fail, cb);
}

export const useLoginSuccessHandler = (cb: () => void) => {
    useEventSubscription(loginFx.doneData, cb);
}

export const loginSelectors = {
    useLoginLoading: () => useUnit(loginFx.pending),
};
