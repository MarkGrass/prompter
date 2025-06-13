import type { FC } from 'react';

import type { PaperProps as OzenPaperProps } from '@ozen-ui/kit/Paper';
import { Paper as OzenPaper } from '@ozen-ui/kit/Paper';

type PaperProps = OzenPaperProps;

export const Paper: FC<PaperProps> = ({ children, ...rest }) => (
    <OzenPaper {...rest}>{children}</OzenPaper>
);
