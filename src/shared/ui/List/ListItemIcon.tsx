import type { FC } from 'react';

import type { ListItemIconProps as OzenListItemIconProps } from '@ozen-ui/kit/List';
import { ListItemIcon as OzenListItemIcon } from '@ozen-ui/kit/List';

type ListItemIconProps = OzenListItemIconProps;

export const ListItemIcon: FC<ListItemIconProps> = ({ children, ...rest }) => (
    <OzenListItemIcon {...rest}>{children}</OzenListItemIcon>
);
