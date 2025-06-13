import type { FC } from 'react';

import type { TableHeadProps as OzenHeadProps } from '@ozen-ui/kit/Table';
import { TableHead as OzenTableHead } from '@ozen-ui/kit/Table';

type TableHeadProps = OzenHeadProps;

export const TableHead: FC<TableHeadProps> = ({ children, ...rest }) => (
    <OzenTableHead {...rest}>{children}</OzenTableHead>
);
