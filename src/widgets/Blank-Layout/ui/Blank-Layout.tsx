import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Paper } from 'shared/ui';

import styles from './Blank-Layout.module.css';

export const BlankLayout: FC = () => {
    return (
        <Paper className={styles.wrapper} radius="xl" shadow="m">
            <Outlet />
        </Paper>
    );
};
