import type { FC } from 'react';

import type { ContainerProps as OzenContainerProps } from '@ozen-ui/kit/Container';
import { Container as OzenContainer } from '@ozen-ui/kit/Container';

type ContainerProps = OzenContainerProps;

export const Container: FC<ContainerProps> = ({ children, ...rest }) => (
    <OzenContainer
        gutters={{ s: 'xl', xs: 'l' }}
        maxWidth="l"
        position="center"
        {...rest}
    >
        {children}
    </OzenContainer>
);
