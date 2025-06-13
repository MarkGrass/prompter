import type { FC } from 'react';

import type {
    ListItemTextProps as OzenListItemTextProps} from '@ozen-ui/kit/List';
import {
    ListItemText as OzenListItemText
} from '@ozen-ui/kit/List';

type ListItemTextProps = OzenListItemTextProps;

export const ListItemText: FC<ListItemTextProps> = ({ children, ...rest }) => (
    <OzenListItemText {...rest}>{children}</OzenListItemText>
);
