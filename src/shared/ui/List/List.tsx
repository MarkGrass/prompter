import type { FC } from 'react';

import type { ListProps as OzenListProps } from '@ozen-ui/kit/List';
import { List as OzenList } from '@ozen-ui/kit/List';

type ListProps = OzenListProps;

export const List: FC<ListProps> = ({ children, ...rest }) => (
    <OzenList {...rest}>{children}</OzenList>
);
