import type { FC } from 'react';

import { useGate } from 'effector-react';

import {
    DialogsCard,
    dialogsGate,
    dialogsSelectors,
    useDialogsErrorHandler,
} from 'entities/dialogs';
import { Profile } from 'entities/user';
import { DialogsFilter } from 'features/dialogs';
import { Stack, useSnackbar } from 'shared/ui';

import styles from './Dialogs.module.css';

const { useDialogs } = dialogsSelectors;

type DialogsProps = {
    activeDialog?: string | null;
    onSelect?: (id: string) => void;
};

export const Dialogs: FC<DialogsProps> = ({
    activeDialog = null,
    onSelect = () => null,
}) => {
    useGate(dialogsGate);
    const { pushMessage } = useSnackbar();
    const dialogs = useDialogs();

    useDialogsErrorHandler(() => {
        pushMessage({
            status: 'error',
            title: 'Не удалось загрузить список диалогов',
        });
    });

    return (
        <Stack
            fullHeight
            fullWidth
            className={styles.container}
            direction="column"
            gap="l"
        >
            <DialogsFilter />
            <div className={styles.list}>
                <Stack fullWidth direction="column" gap="m">
                    {dialogs.map((dialog) => (
                        <DialogsCard
                            key={dialog.id}
                            selected={activeDialog === dialog.id}
                            onSelect={onSelect}
                            {...dialog}
                        />
                    ))}
                </Stack>
            </div>
            <Profile />
        </Stack>
    );
};
