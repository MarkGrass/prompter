import { forwardRef } from 'react';

import type {
    MenuListProps as OzenMenuListProps} from '@ozen-ui/kit/Menu';
import {
    MenuList as OzenMenuList
} from '@ozen-ui/kit/Menu';

type MenuListProps = OzenMenuListProps;

export const MenuList = forwardRef<HTMLDivElement, MenuListProps>(
    ({ children, ...rest }, ref) => (
        <OzenMenuList {...rest} ref={ref}>
            {children}
        </OzenMenuList>
    ),
);
