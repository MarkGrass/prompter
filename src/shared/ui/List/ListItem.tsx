import type { FC } from 'react';

import type {
    ListItemProps as OzenListItemProps} from '@ozen-ui/kit/List';
import {
    ListItem as OzenListItem
} from '@ozen-ui/kit/List';

type ListItemProps = OzenListItemProps;

export const ListItem: FC<ListItemProps> = ({ children, ...rest }) => (
    <OzenListItem {...rest}>{children}</OzenListItem>
);
