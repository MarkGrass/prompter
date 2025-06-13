import type { FC } from 'react';

import type { TextareaProps as OzenTextareaProps } from '@ozen-ui/kit/Textarea';
import { Textarea as OzenTextarea } from '@ozen-ui/kit/Textarea';

export type BaseTextareaProps = OzenTextareaProps;

export const BaseTextarea: FC<BaseTextareaProps> = ({ ...rest }) => (
    <OzenTextarea size="s" {...rest} />
);
