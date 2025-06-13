import type { FC } from 'react';

import type { CheckboxProps as OzenCheckboxProps } from '@ozen-ui/kit/CheckboxNext';
import { Checkbox as OzenCheckbox } from '@ozen-ui/kit/CheckboxNext';

export type BaseCheckboxProps = OzenCheckboxProps;

export const BaseCheckbox: FC<BaseCheckboxProps> = ({ ...rest }) => (
    <OzenCheckbox size="s" {...rest} />
);
