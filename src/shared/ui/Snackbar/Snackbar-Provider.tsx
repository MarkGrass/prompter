import type { FC } from 'react';

import type { SnackbarProviderProps as OzenSnackbarProviderProps } from '@ozen-ui/kit/Snackbar';
import { SnackbarProvider as OzenSnackbarProvider } from '@ozen-ui/kit/Snackbar';

type SnackbarProviderProps = OzenSnackbarProviderProps;

export const SnackbarProvider: FC<SnackbarProviderProps> = ({ children, ...rest }) => (
    <OzenSnackbarProvider {...rest}>{children}</OzenSnackbarProvider>
);
