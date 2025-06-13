import type { FC } from 'react';

import type {
    TooltipProps as OzenTooltipProps} from '@ozen-ui/kit/Tooltip';
import {
    Tooltip as OzenTooltip,
} from '@ozen-ui/kit/Tooltip';

export type TooltipProps = OzenTooltipProps;

export const Tooltip: FC<TooltipProps> = ({ children, ...rest }) => (
    <OzenTooltip {...rest}>{children}</OzenTooltip>
);
