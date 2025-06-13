import type { FC } from 'react';

import type {
    GridItemProps as OzenGridItemProps} from '@ozen-ui/kit/Grid';
import {
    GridItem as OzenGridItem,
} from '@ozen-ui/kit/Grid';

type GridItemProps = OzenGridItemProps;

export const GridItem: FC<GridItemProps> = ({ children, ...rest }) => (
    <OzenGridItem {...rest}>{children}</OzenGridItem>
);
