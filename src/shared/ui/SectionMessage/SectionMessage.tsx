import type { FC } from 'react';

import type { SectionMessageProps as OzenSectionMessageProps } from '@ozen-ui/kit/SectionMessage';
import { SectionMessage as OzenSectionMessage } from '@ozen-ui/kit/SectionMessage';

export type SectionMessageProps = OzenSectionMessageProps;

export const SectionMessage: FC<SectionMessageProps> = ({ children, ...rest }) => (
    <OzenSectionMessage {...rest}>{children}</OzenSectionMessage>
);
