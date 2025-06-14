import type { FC } from 'react';

import cn from 'clsx';

import type { Dialog } from 'entities/dialogs';
import { Avatar, Card, Stack, Typography } from 'shared/ui';
import { formatDate } from 'shared/utils';

import styles from './Dialogs-Card.module.css';

type DialogsCardProps = Dialog & {
    selected?: boolean;
    className?: string;
    onSelect: (id: string) => void;
};

export const DialogsCard: FC<DialogsCardProps> = ({
    id,
    client_id,
    created_at,
    onSelect,
    selected = false,
    className = '',
    dialogs_messages = [],
}) => {
    const lastMessage = dialogs_messages[dialogs_messages.length - 1] || {};
    const handleClick = () => {
        onSelect(id);
    };

    return (
        <Card
            interactive
            borderColor={selected ? 'selected' : 'standard'}
            size="s"
            className={cn({
                [styles.dialog]: true,
                [className]: Boolean(className),
            })}
            onClick={handleClick}
        >
            <Stack fullWidth align="center" gap="m">
                <Avatar name={(client_id || 'Unknown Client').toString()} size="s" />
                <Stack fullWidth className={styles.info} direction="column">
                    {lastMessage.message && (
                        <Typography noWrap variant="text-m_1">
                            {lastMessage.message}
                        </Typography>
                    )}
                    {created_at && (
                        <Typography color="secondary" variant="text-xs">
                            {formatDate(created_at)}
                        </Typography>
                    )}
                </Stack>
            </Stack>
        </Card>
    );
};
