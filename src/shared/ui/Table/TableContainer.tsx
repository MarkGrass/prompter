import type { FC } from 'react';

import type {
    TableContainerProps as OzenContainerProps} from '@ozen-ui/kit/Table';
import {
    TableContainer as OzenTableContainer,
} from '@ozen-ui/kit/Table';

type TableContainerProps = OzenContainerProps;

export const TableContainer: FC<TableContainerProps> = ({ children, ...rest }) => (
    <OzenTableContainer {...rest}>{children}</OzenTableContainer>
);
