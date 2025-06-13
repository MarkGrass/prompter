import type { FC } from 'react';

import type { TypographyProps as OzenTypographyProps } from '@ozen-ui/kit/Typography';
import { Typography as OzenTypography } from '@ozen-ui/kit/Typography';

export type TypographyProps = OzenTypographyProps;

export const Typography: FC<TypographyProps> = ({ children, ...rest }) => (
    <OzenTypography variant="text-s" {...rest}>
        {children}
    </OzenTypography>
);
