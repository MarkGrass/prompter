import type { FC } from 'react';

import type { CollapseProps as OzenCollapseProps } from '@ozen-ui/kit/Collapse';
import { Collapse as OzenCollapse } from '@ozen-ui/kit/Collapse';

type CollapseProps = OzenCollapseProps;

export const Collapse: FC<CollapseProps> = ({ children, ...rest }) => (
    <OzenCollapse {...rest}>{children}</OzenCollapse>
);
