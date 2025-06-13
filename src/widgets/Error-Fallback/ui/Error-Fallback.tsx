import type { FallbackProps } from 'react-error-boundary';

import { Button, Page, Typography } from 'shared/ui';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
    <Page>
        <Typography>Что-то пошло не так</Typography>
        <pre>{error.message}</pre>
        <Button onClick={resetErrorBoundary}>Попробовать еще раз</Button>
    </Page>
);
