import type { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { userSelectors } from 'entities/user';
import { ROUTES } from 'shared/router';

type PrivateRouteProps = {
    children: ReactNode;
};
const { useIsAuthorized } = userSelectors;
export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
    const isAuthorized = useIsAuthorized();
    const location = useLocation();

    if (!isAuthorized) {
        return <Navigate replace state={{ from: location }} to={ROUTES.LOGIN} />;
    }

    return children;
};
