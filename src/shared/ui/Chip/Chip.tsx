import type { FC } from 'react';

import type { ChipProps as OzenChipProps } from '@ozen-ui/kit/Chip';
import { Chip as OzenChip } from '@ozen-ui/kit/Chip';

type ChipProps = OzenChipProps;

export const Chip: FC<ChipProps> = ({ children, ...rest }) => (
    <OzenChip {...rest}>{children}</OzenChip>
);
