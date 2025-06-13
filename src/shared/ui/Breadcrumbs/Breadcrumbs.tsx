import type { FC } from 'react';

import type { BreadcrumbsProps as OzenBreadcrumbsProps } from '@ozen-ui/kit/Breadcrumbs';
import { Breadcrumbs as OzenBreadcrumbs } from '@ozen-ui/kit/Breadcrumbs';

export type BreadcrumbsProps = OzenBreadcrumbsProps;

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ children, ...rest }) => (
    <OzenBreadcrumbs {...rest}>{children}</OzenBreadcrumbs>
);
