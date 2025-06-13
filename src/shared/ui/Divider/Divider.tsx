import type { FC } from 'react';

import type {
    DividerProps as OzenDividerProps} from '@ozen-ui/kit/Divider';
import {
    Divider as OzenDivider
} from '@ozen-ui/kit/Divider';

type DividerProps = OzenDividerProps;

export const Divider: FC<DividerProps> = ({ children, ...rest }) => (
    <OzenDivider size="s" {...rest}>
        {children}
    </OzenDivider>
);
