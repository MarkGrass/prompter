import type { FC } from 'react';

import type {
    TableRowProps as OzenRowProps} from '@ozen-ui/kit/Table';
import {
    TableRow as OzenTableRow,
} from '@ozen-ui/kit/Table';

type TableRowProps = OzenRowProps;

export const TableRow: FC<TableRowProps> = ({ children, ...rest }) => (
    <OzenTableRow {...rest}>{children}</OzenTableRow>
);
