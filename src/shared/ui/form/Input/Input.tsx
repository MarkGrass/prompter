import type { FC } from 'react';

import type { InputProps as OzenInputProps } from '@ozen-ui/kit/Input';
import { Input as OzenInput } from '@ozen-ui/kit/Input';

export type BaseInputProps = OzenInputProps;

export const BaseInput: FC<BaseInputProps> = ({ ...rest }) => (
    <OzenInput size="s" {...rest} />
);
