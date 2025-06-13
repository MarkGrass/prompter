import type { FC } from 'react';

import type { BreadcrumbItemProps as OzenBreadcrumbItemProps } from '@ozen-ui/kit/Breadcrumbs';
import { BreadcrumbItem as OzenBreadcrumbItem } from '@ozen-ui/kit/Breadcrumbs';

export type BreadcrumbItemProps = OzenBreadcrumbItemProps;

export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ children, ...rest }) => (
    <OzenBreadcrumbItem {...rest}>{children}</OzenBreadcrumbItem>
);
