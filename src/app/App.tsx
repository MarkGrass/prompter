// @ts-ignore
import '@ozen-ui/fonts';
import type { FC } from 'react';
import { useCallback, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { OzenProvider, themeOzenDefault } from '@ozen-ui/kit/OzenProvider';

import { ROUTES } from 'shared/router';
import { SnackbarProvider } from 'shared/ui';
import { ErrorFallback } from 'widgets/Error-Fallback';

import { Router } from './Router';

export const App: FC = () => {
    const [state, setState] = useState(false);
    const forceUpdate = useCallback(() => setState((x) => !x), []);

    return (
        <OzenProvider
            ssr={{ isEnabled: false }}
            style={{ display: 'contents' }}
            theme={themeOzenDefault}
        >
            <BrowserRouter basename={ROUTES.ROOT}>
                <ErrorBoundary
                    fallbackRender={ErrorFallback}
                    resetKeys={[state]}
                    onReset={forceUpdate}
                >
                    <SnackbarProvider
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <Router />
                    </SnackbarProvider>
                </ErrorBoundary>
            </BrowserRouter>
        </OzenProvider>
    );
};
