import { forwardRef } from 'react';

import type { StackProps as OzenStackProps } from '@ozen-ui/kit/Stack';
import { Stack as OzenStack } from '@ozen-ui/kit/Stack';
import clsx from 'clsx';

import styles from './Stack.module.css';

export type StackProps = OzenStackProps & {
    fullHeight?: boolean;
};

export const Stack = forwardRef<HTMLDivElement, StackProps>(
    ({ children, fullHeight, ...rest }, ref) => (
        <OzenStack
            {...rest}
            className={clsx(rest.className, { [styles.fullHeight]: fullHeight })}
            ref={ref}
        >
            {children}
        </OzenStack>
    ),
);
