import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';

import { useUnit } from 'effector-react/effector-react.umd';

import { useEventSubscription } from 'shared/api';

import { getDialogsApi } from '../api/get-dialogs.api';

import type { Dialog, DialogsMeta, DialogsRequest } from './dialogs.types';

export const dialogsGate = createGate<DialogsRequest>();
export const dialogsGot = createEvent<DialogsRequest>();
export const dialogsReset = createEvent();

const getDialogsFx = createEffect('getDialogsFx', {
    handler: getDialogsApi,
});

const $dialogs = createStore<Dialog[]>([]);
const $dialogsMeta = createStore<DialogsMeta>({
    Page: 0,
    Limit: 0,
    Offset: 0,
});

sample({
    clock: [dialogsGate.open, dialogsGot],
    target: getDialogsFx,
});

$dialogs
    .on(getDialogsFx.doneData, (_, data) => {
        return data.Result;
    })
    .reset(dialogsReset);

$dialogsMeta
    .on(getDialogsFx.doneData, (_, { Page, Limit, Offset }) => ({
        Page,
        Limit,
        Offset,
    }))
    .reset(dialogsReset);

export const useDialogsErrorHandler = (cb: () => void) => {
    useEventSubscription(getDialogsFx.fail, cb);
};

export const dialogsSelectors = {
    useDialogs: () => useUnit($dialogs),
};
