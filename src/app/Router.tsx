import { Suspense, type FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from 'pages/Private-Route';
import { ROUTES } from 'shared/router';
import { Loader, Stack } from 'shared/ui';
import { AppLayout } from 'widgets/App-Layout';
import { BlankLayout } from 'widgets/Blank-Layout';


const NoMatchPage = lazy(() => import('pages/No-Match-Page'));
const LoginPage = lazy(() => import('pages/Login-Page'));
const DialogsPage = lazy(() => import('pages/Dialogs-Page'));

export const Router: FC = () => (
    <Suspense
        fallback={
            <Stack fullHeight fullWidth align="center" justify="center">
                <Loader />
            </Stack>
        }
    >
        <Routes>
            <Route element={<BlankLayout />}>
                <Route element={<NoMatchPage />} path={ROUTES.UNKNOWN} />
            </Route>

            <Route element={<BlankLayout />}>
                <Route element={<LoginPage />} path={ROUTES.LOGIN} />
            </Route>

            <Route element={<AppLayout />}>
                <Route
                    path={ROUTES.DIALOGS}
                    element={
                        <PrivateRoute>
                            <DialogsPage />
                        </PrivateRoute>
                    }
                />
            </Route>
        </Routes>
    </Suspense>
);
