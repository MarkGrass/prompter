import type { SyntheticEvent } from 'react';

import type {
    SelectProps as OzenSelectProps,
    SelectPropValue as OzenSelectPropValue,
} from '@ozen-ui/kit/Select';
import { Select as OzenSelect, Option } from '@ozen-ui/kit/Select';

export type SelectItem = {
    title: string;
    value: string | boolean;
    disabled?: boolean;
};
export type SelectPropValue<MULTIPLE extends boolean> = OzenSelectPropValue<MULTIPLE>;

export type SelectProps<MULTIPLE extends boolean = false> = {
    items: SelectItem[];
    onChange?: (
        value: SelectPropValue<MULTIPLE>,
        e: SyntheticEvent | KeyboardEvent,
    ) => void;
} & OzenSelectProps<MULTIPLE>;

export const Select = <MULTIPLE extends boolean>({
    items,
    ...props
}: SelectProps<MULTIPLE>) => {
    return (
        <OzenSelect {...props}>
            {items.map(({ value, title, disabled }) => (
                <Option disabled={disabled} key={title} value={value.toString()}>
                    {title}
                </Option>
            ))}
        </OzenSelect>
    );
};
