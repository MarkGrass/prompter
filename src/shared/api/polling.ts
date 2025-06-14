import type { EventCallable } from 'effector';
import { createEvent, createStore, sample } from 'effector';

import { interval } from 'patronum';

export type PollingIntervalOptions = {
    leading?: boolean;
    trailing?: boolean;
};

export function polling(
    event: EventCallable<void>,
    timeout: number,
    options: PollingIntervalOptions = {},
) {
    const started = createEvent();
    const stopped = createEvent();

    const $isActive = createStore(false)
        .on(started, () => true)
        .on(stopped, () => false);

    const { tick } = interval({
        timeout,
        start: started,
        stop: stopped,
        ...options,
    });

    sample({
        clock: [tick],
        source: $isActive,
        filter: (state: boolean) => state,
        target: event,
    });

    return { started, stopped };
}
