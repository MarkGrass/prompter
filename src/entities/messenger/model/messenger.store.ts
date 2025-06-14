import { createEffect, createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';

import { getDialogApi } from '../api/get-dialog.api';

import type { Dialog } from './messenger.types';

export const dialogGot = createEvent<string>();
export const dialogReset = createEvent();

const getDialogByIdFx = createEffect('getDialogByIdFx', {
    handler: getDialogApi,
});

export const $dialog = createStore<Dialog | null>(null);

sample({
    clock: dialogGot,
    target: getDialogByIdFx,
});

$dialog.on(getDialogByIdFx.doneData, (_, data) => data).reset(dialogReset);

export const messengerSelectors = {
    useDialog: () => useUnit($dialog),
};
