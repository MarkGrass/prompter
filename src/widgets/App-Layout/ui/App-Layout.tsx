import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Stack } from 'shared/ui';

import { Header } from './Header';

export const AppLayout: FC = () => {
    return (
        <>
            <Header />
            <Stack fullHeight fullWidth>
                <Outlet />
            </Stack>
        </>
    );
};
