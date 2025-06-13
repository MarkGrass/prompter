import type { FC } from 'react';

import type { TableCellProps as OzenCellProps } from '@ozen-ui/kit/Table';
import { TableCell as OzenTableCell } from '@ozen-ui/kit/Table';

type TableCellProps = OzenCellProps;

export const TableCell: FC<TableCellProps> = ({ children, ...rest }) => (
    <OzenTableCell verticalAlign="middle" {...rest}>
        {children}
    </OzenTableCell>
);
