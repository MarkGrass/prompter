import { forwardRef } from 'react';

import type { GridProps as OzenGridProps } from '@ozen-ui/kit/Grid';
import { Grid as OzenGrid } from '@ozen-ui/kit/Grid';
import cn from 'clsx';

import styles from './Grid.module.css';

export type GridProps = OzenGridProps & {
    fullWidth?: boolean;
    fullHeight?: boolean;
};

export const Grid = forwardRef<HTMLDivElement, GridProps>(
    (
        { fullWidth = false, fullHeight = false, className = '', children, ...rest },
        ref,
    ) => (
        <OzenGrid
            ref={ref}
            {...rest}
            className={cn({
                [styles.fullWidth]: fullWidth,
                [styles.fullHeight]: fullHeight,
                [className]: Boolean(className),
            })}
        >
            {children}
        </OzenGrid>
    ),
);
