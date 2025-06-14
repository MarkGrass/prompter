import { type FC, type PropsWithChildren, type UIEvent, useCallback } from 'react';
import { useRef } from 'react';

import cn from 'clsx';

import styles from './Scroller.module.css';

type ScrollerProps = {
    fullWidth?: boolean;
    fullHeight?: boolean;
    className?: string;
    scrollOffset?: number;
    onScrollOver?: () => void;
    onScroll?: (e: UIEvent) => void;
};

export const Scroller: FC<PropsWithChildren<ScrollerProps>> = ({
    className = '',
    fullWidth = false,
    fullHeight = false,
    scrollOffset = 20,
    onScrollOver = () => null,
    onScroll = () => null,
    children,
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const handleScroll = useCallback(
        (event: UIEvent) => {
            if (ref.current) {
                const { scrollTop, scrollHeight, offsetHeight } = ref.current;
                onScroll(event);

                if (scrollTop + scrollOffset >= scrollHeight - offsetHeight) {
                    onScrollOver();
                }
            }
        },
        [ref.current],
    );

    return (
        <div
            ref={ref}
            className={cn({
                [styles.scroller]: true,
                [styles.fullWidth]: fullWidth,
                [styles.fullHeight]: fullHeight,
                [className]: Boolean(className),
            })}
            onScroll={handleScroll}
        >
            <div className={styles.wrapper}>{children}</div>
        </div>
    );
};
