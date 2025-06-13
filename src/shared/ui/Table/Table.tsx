import type { FC } from 'react';

import type { TableProps as OzenTableProps} from '@ozen-ui/kit/Table';
import { Table as OzenTable } from '@ozen-ui/kit/Table';

type TableProps = OzenTableProps;

export const Table: FC<TableProps> = ({ children, ...rest }) => (
    <OzenTable {...rest}>{children}</OzenTable>
);
