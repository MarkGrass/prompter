import type { FC } from 'react';

import type {
    ProgressBarProps as OzenProgressBarProps} from '@ozen-ui/kit/ProgressBar';
import {
    ProgressBar as OzenProgressBar
} from '@ozen-ui/kit/ProgressBar';

type ProgressBarProps = OzenProgressBarProps;

export const ProgressBar: FC<ProgressBarProps> = (props) => (
    <OzenProgressBar {...props} />
);
