import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';

import { getDialogsApi } from '../api/get-dialogs.api';

import type { Dialog, DialogsRequest } from './dialogs.types';

export const dialogsGate = createGate<DialogsRequest>();
export const dialogsGot = createEvent<DialogsRequest>();

const getDialogsFx = createEffect('getDialogsFx', {
    handler: getDialogsApi,
});

const $dialogs = createStore<Dialog[]>([]);

sample({
    clock: [dialogsGate.open, dialogsGot],
    target: getDialogsFx,
});

$dialogs.on(getDialogsFx.doneData, (_, response) => {
    return response.result;
});
