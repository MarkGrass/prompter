import { type FC, useEffect } from 'react';

import cn from 'clsx';

import { dialogGot, messengerSelectors } from 'entities/messenger';
import { Card, Scroller, Stack } from 'shared/ui';
import { BaseTextarea } from 'shared/ui/form/Textarea/Textarea';

import styles from './Messenger.module.css';

type MessengerProps = {
    activeDialog: string | null;
};

const { useDialog } = messengerSelectors;

export const Messenger: FC<MessengerProps> = ({ activeDialog }) => {
    const dialog = useDialog();

    useEffect(() => {
        if (activeDialog) {
            dialogGot(activeDialog);
        }
    }, [activeDialog]);

    if (!activeDialog) {
        return null;
    }

    return (
        <Stack fullHeight fullWidth className={styles.messenger} direction="column">
            <Scroller fullHeight fullWidth>
                <Stack
                    fullHeight
                    fullWidth
                    className={styles.messages}
                    direction="column"
                    gap="m"
                >
                    {dialog?.dialogs_messages.map((item) => {
                        return (
                            <Card
                                key={item.message}
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
            <BaseTextarea />
        </Stack>
    );
};
