import type { FC } from 'react';

import type {
    PaginationProps as OzenPaginationProps} from '@ozen-ui/kit/Pagination';
import {
    Pagination as OzenPagination
} from '@ozen-ui/kit/Pagination';

type PaginationProps = OzenPaginationProps;

export const Pagination: FC<PaginationProps> = (props) => <OzenPagination {...props} />;
