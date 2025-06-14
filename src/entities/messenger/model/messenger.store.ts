import { createEffect, createEvent, createStore, sample, split } from 'effector';
import { useUnit } from 'effector-react';

import { polling } from 'shared/api';

import { getDialogApi } from '../api/get-dialog.api';

import type { Dialog } from './messenger.types';

export const dialogGot = createEvent<string>();
export const dialogPooled = createEvent();
export const dialogReset = createEvent();

export const dialogPolling = polling(dialogPooled, 1000, {
    leading: true,
    trailing: true,
});

const getDialogByIdFx = createEffect('getDialogByIdFx', {
    handler: getDialogApi,
});

const $activeDialog = createStore<string | null>(null);
export const $dialog = createStore<Dialog | null>(null);

sample({
    clock: dialogGot,
    target: $activeDialog,
});

sample({
    clock: $activeDialog,
});

split({
    source: $activeDialog,
    match: (id: string | null) => {
        return id ? 'start' : 'stop';
    },
    cases: {
        start: dialogPolling.started,
        stop: dialogPolling.stopped,
    },
});

sample({
    //@ts-ignore
    clock: dialogPooled,
    source: $activeDialog,
    filter: (id) => Boolean(id),
    fn: (id) => id,
    target: getDialogByIdFx,
});

$dialog.on(getDialogByIdFx.doneData, (_, data) => data).reset(dialogReset);

export const messengerSelectors = {
    useDialog: () => useUnit($dialog),
};
