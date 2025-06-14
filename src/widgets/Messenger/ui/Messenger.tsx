import { type FC, useEffect } from 'react';

import { CrossIcon } from '@ozen-ui/icons';
import cn from 'clsx';

import {
    dialogGot,
    dialogPolling,
    dialogReset,
    messengerSelectors,
} from 'entities/messenger';
import { SendMessage } from 'features/messenger/send-message';
import { Card, IconButton, Scroller, Stack } from 'shared/ui';

import styles from './Messenger.module.css';

type MessengerProps = {
    hint: string;
    onClose: () => void;
    activeDialog: string | null;
};

const { useDialog } = messengerSelectors;

export const Messenger: FC<MessengerProps> = ({
    hint,
    onClose = () => null,
    activeDialog,
}) => {
    const dialog = useDialog();

    useEffect(() => {
        if (activeDialog) {
            dialogReset();
            dialogGot(activeDialog);
        }
    }, [activeDialog]);

    useEffect(() => {
        return () => {
            dialogPolling.stopped();
        };
    }, []);

    if (!activeDialog || !dialog) {
        return null;
    }

    return (
        <Stack
            fullHeight
            fullWidth
            className={styles.messenger}
            direction="column"
            gap="xl"
        >
            <IconButton className={styles.close} icon={<CrossIcon />} onClick={onClose} />
            <Scroller fullWidth className={styles.messages}>
                <Stack fullWidth direction="column" gap="m">
                    {dialog?.dialogs_messages.map((item) => {
                        return (
                            <Card
                                key={Date.now()}
                                className={cn({
                                    [styles.message]: true,
                                    [styles.client]: item.role === 'client',
                                    [styles.operator]: item.role === 'operator',
                                })}
                            >
                                {item.message}
                            </Card>
                        );
                    })}
                </Stack>
            </Scroller>

            <SendMessage
                className={styles.control}
                dialog_id={dialog.id}
                role="operator"
                value={hint}
            />
        </Stack>
    );
};
