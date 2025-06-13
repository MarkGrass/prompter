import type { FC } from 'react';

import type { LinkProps as OzenLinkProps } from '@ozen-ui/kit/Link';
import { Link as OzenLink } from '@ozen-ui/kit/Link';

type LinkProps = OzenLinkProps;

export const Link: FC<LinkProps> = ({ children, ...rest }) => (
    <OzenLink {...rest}>{children}</OzenLink>
);
