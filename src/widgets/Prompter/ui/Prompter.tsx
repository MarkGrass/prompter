import type { FC } from 'react';

import { messengerSelectors } from 'entities/messenger';
import { Button, Card, Stack, Typography } from 'shared/ui';

import styles from './Prompter.module.css';

type PrompterProps = {
    onPushMessage: (message: string) => void;
};
const { useDialog } = messengerSelectors;

export const Prompter: FC<PrompterProps> = ({ onPushMessage }) => {
    const dialog = useDialog();
    const calcConfidence = (value: number) => {
        if (!value) {
            return '0%';
        }

        return `${(100 / value).toFixed(0)}%`;
    };

    if (!dialog) {
        return null;
    }

    return (
        <Stack fullWidth className={styles.prompter} direction="column" gap="xl">
            <Typography variant="text-xl_1">Помощник</Typography>

            {dialog.data.message && (
                <Card className={styles.reason} size="s">
                    <Stack fullWidth direction="column" gap="s">
                        <Typography variant="text-m_1">{dialog.data.message}</Typography>
                        <Typography color="secondary">
                            Уверенность:&nbsp;{calcConfidence(dialog.data.confidence)}
                        </Typography>
                        <Button
                            className={styles.copy}
                            size="xs"
                            variant="contained-additional"
                            onClick={() => onPushMessage(dialog.data.message)}
                        >
                            Вставить
                        </Button>
                    </Stack>
                </Card>
            )}

            {dialog.data.database_file && (
                <Card>
                    <Typography color="secondary">
                        Подсказка основана на основе
                    </Typography>
                    <Typography color="primary" variant="text-s_1">
                        {`${dialog.data.database_file}: "${dialog.data.database_file_part}"`}
                    </Typography>
                </Card>
            )}

            {(dialog.data.relative_questions || []).map((item) => (
                <Card className={styles.reason} key={item} size="s">
                    <Stack fullWidth direction="column" gap="s">
                        <Typography variant="text-m_1">{item}</Typography>
                        <Typography color="secondary">
                            Уверенность:&nbsp;{calcConfidence(dialog.data.confidence)}
                        </Typography>
                        <Button
                            className={styles.copy}
                            size="xs"
                            variant="contained-additional"
                            onClick={() => onPushMessage(item)}
                        >
                            Вставить
                        </Button>
                    </Stack>
                </Card>
            ))}
        </Stack>
    );
};
