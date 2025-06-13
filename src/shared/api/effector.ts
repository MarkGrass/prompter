import { useEffect } from 'react';

import type { Event } from 'effector';

export const useEventSubscription = <Payload>(
    e: Event<Payload>,
    cb: (args: Payload) => void,
) => {
    useEffect(() => {
        const unsubscribe = e.watch(cb);

        return unsubscribe;
    }, []);
};
