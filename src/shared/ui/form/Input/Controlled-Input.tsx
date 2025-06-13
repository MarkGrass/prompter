import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import type { BaseInputProps } from './Input';
import { BaseInput } from './Input';

export type InputProps = BaseInputProps & {
    name: string;
};

export const Input: FC<InputProps> = ({
    name,
    size,
    hint,
    onChange,
    ...props
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange: onChangeField, onBlur, value, ref },
                fieldState: { error },
            }) => {
                const hasError = Boolean(error);
                const errorMessage = error?.message ?? '';

                return (
                    <BaseInput
                        error={hasError}
                        hint={hasError ? errorMessage : hint}
                        id={name}
                        size={size || 's'}
                        value={value}
                        inputProps={{
                            autoComplete: 'do-not-autofill',
                            required: false,
                            ref,
                        }}
                        onBlur={onBlur}
                        onChange={(e) => {
                            onChange?.(e);
                            onChangeField(e);
                        }}
                        {...props}
                    />
                );
            }}
        />
    );
};
