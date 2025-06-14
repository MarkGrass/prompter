import { createEffect, createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';

import { creatDialogApi } from '../api/creat-dialog.api';

import type { CreateDialogRequest, CreateDialogResponse } from './create-dialog.types';

export const createDialogGot = createEvent<CreateDialogRequest>();

const createDialogFx = createEffect('createDialogFx', {
    handler: creatDialogApi,
});

const $dialog = createStore<CreateDialogResponse | null>(null);

sample({
    clock: createDialogGot,
    target: createDialogFx,
});

$dialog.on(createDialogFx.doneData, (_, data) => data);

export const createDialogSelectors = {
    useDialog: () => useUnit($dialog),
};
