import type { ChangeEvent, FC } from 'react';

import type { InputProps } from '@ozen-ui/kit/Input';
import { Input } from '@ozen-ui/kit/Input';

export type DatePickerProps = InputProps & {
    type: 'time' | 'date';
};

export const DatePicker: FC<DatePickerProps> = ({
    size,
    inputProps,
    onChange,
    type = 'date',
    ...props
}) => {
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const date = value.split(' ')[0];

        if (date.length > 10) return;
        if (onChange) onChange(e);
    };

    return (
        <Input
            size={size ?? 's'}
            type={type}
            inputProps={{
                ...inputProps,
                autoComplete: 'do-not-autofill',
            }}
            onChange={handleOnChange}
            {...props}
        />
    );
};
