import type { FC } from 'react';

import { Typography } from '../Typography';

type TimerTextProps = {
    infoText: string;
    time: number;
};
export const TimerText: FC<TimerTextProps> = ({ infoText, time }) => {
    if (!time) return null;

    return (
        <Typography color="info">
            {infoText}: {time}
        </Typography>
    );
};
