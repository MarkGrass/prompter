import { forwardRef } from 'react';

import type { ButtonProps as OzenButtonProps } from '@ozen-ui/kit/ButtonNext';
import { Button as OzenButton } from '@ozen-ui/kit/ButtonNext';

export type ButtonProps = OzenButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, ...rest }, ref) => (
        <OzenButton ref={ref} size="s" {...rest}>
            {children}
        </OzenButton>
    ),
);
