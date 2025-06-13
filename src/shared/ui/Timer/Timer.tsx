import type { FC} from 'react';
import { useEffect } from 'react';

import { useTimer } from '@ozen-ui/kit/useTimer';

import { Button } from '../Button';
import { Stack } from '../Stack';

import { TimerText } from './Timer-Text';

type TimerProps = {
    disableSendRequest?: boolean;
    isLoadingSend?: boolean;
    isLoadingSendAgain?: boolean;
    isStartTimer?: boolean;
    requestCb?: () => void;
    sendAgainCb?: () => void;
    buttonSendAgainTitle?: string;
    buttonSendTitle?: string;
    infoText?: string;
    delay?: number;
    variation?: 'top' | 'bottom';
};
export const Timer: FC<TimerProps> = ({
    requestCb,
    isStartTimer,
    sendAgainCb,
    isLoadingSend = false,
    isLoadingSendAgain = false,
    disableSendRequest = true,
    buttonSendTitle = 'Отправить',
    buttonSendAgainTitle = 'Отправить код повторно',
    infoText = 'Повторная отправка СМС возможна через',
    delay = 60,
    variation = 'button',
}) => {
    const { count, startTimer } = useTimer({
        startTime: delay * 1000,
        interval: 1000,
        endTime: 0,
    });

    const time = count / 1000;

    const initializeTimer = () => {
        startTimer();
    };

    useEffect(() => {
        if (isStartTimer) {
            initializeTimer();
        }
    }, [isStartTimer, delay]);

    const handleSendAgain = () => {
        initializeTimer();
        sendAgainCb?.();
    };

    if (variation === 'top') {
        return (
            <Stack fullWidth direction="column" gap="m">
                <TimerText infoText={infoText} time={time} />
                <Button
                    fullWidth
                    disabled={!time || disableSendRequest}
                    loading={isLoadingSend}
                    type="submit"
                >
                    {buttonSendTitle}
                </Button>
                <Button
                    fullWidth
                    disabled={Boolean(time)}
                    loading={isLoadingSendAgain}
                    variant="outlined"
                    onClick={handleSendAgain}
                >
                    {buttonSendAgainTitle}
                </Button>
            </Stack>
        );
    }

    return (
        <>
            <Button
                disabled={Boolean(time)}
                type="button"
                variant="function"
                onClick={requestCb}
            >
                {buttonSendAgainTitle}
            </Button>
            <TimerText infoText={infoText} time={time} />
        </>
    );
};
