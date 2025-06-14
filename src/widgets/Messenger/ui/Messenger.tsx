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
import { Card, IconButton, Stack } from 'shared/ui';

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

    const handleClose = () => {
        dialogReset();
        onClose();
    };

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
            <IconButton
                className={styles.close}
                icon={<CrossIcon />}
                onClick={handleClose}
            />
            <div className={styles.messages}>
                <Stack fullWidth direction="column" gap="m">
                    {dialog?.dialogs_messages.map((item, index) => {
                        return (
                            <Card
                                key={index}
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
            </div>

            <SendMessage
                className={styles.control}
                dialog_id={dialog.id}
                role="operator"
                value={hint}
            />
        </Stack>
    );
};
