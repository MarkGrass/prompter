import type { FC } from 'react';

import type { MenuProps as OzenMenuProps } from '@ozen-ui/kit/Menu';
import { Menu as OzenMenu } from '@ozen-ui/kit/Menu';

export type MenuProps = OzenMenuProps;

export const Menu: FC<MenuProps> = ({ children, ...rest }) => (
    <OzenMenu {...rest}>{children}</OzenMenu>
);
