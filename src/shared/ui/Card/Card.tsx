import type { FC } from 'react';

import type { CardProps as OzenCardProps } from '@ozen-ui/kit/Card';
import { Card as OzenCard } from '@ozen-ui/kit/Card';

type CardProps = OzenCardProps;

export const Card: FC<CardProps> = ({ children, ...rest }) => (
    <OzenCard {...rest}>{children}</OzenCard>
);
