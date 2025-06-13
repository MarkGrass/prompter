import type { FC } from 'react';

import type { TableBodyProps as OzenBodyProps } from '@ozen-ui/kit/Table';
import { TableBody as OzenBody } from '@ozen-ui/kit/Table';

type TableBodyProps = OzenBodyProps;

export const TableBody: FC<TableBodyProps> = ({ children, ...rest }) => (
    <OzenBody {...rest}>{children}</OzenBody>
);
