import { createEffect, createEvent, sample } from 'effector';
import { useUnit } from 'effector-react';

import { useEventSubscription } from 'shared/api';

import { sendMessageApi } from '../api/send-message.api';

import type { SendMessageRequest } from './send-message.types';

export const messageSent = createEvent<SendMessageRequest>();
export const sendMessageFx = createEffect('sendMessageFx', {
    handler: sendMessageApi,
});

sample({
    clock: messageSent,
    target: sendMessageFx,
});

export const useSendErrorHandler = (cb: () => void) => {
    useEventSubscription(sendMessageFx.fail, cb);
};
export const useSendSuccessHandler = (cb: () => void) => {
    useEventSubscription(sendMessageFx.doneData, cb);
};

export const sendMessageSelectors = {
    useIsSending: () => useUnit(sendMessageFx.pending),
};
