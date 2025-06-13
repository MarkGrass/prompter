import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FieldHint } from '@ozen-ui/kit/FieldHint';

import type { BaseCheckboxProps } from './Checkbox';
import { BaseCheckbox } from './Checkbox';

export type CheckboxProps = BaseCheckboxProps & {
    name: string;
};

export const Checkbox: FC<CheckboxProps> = ({ name, size, hint, ...props }) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
            }) => {
                const hasError = Boolean(error);
                const errorMessage = error?.message ?? '';
                const message = hasError ? errorMessage : hint;

                return (
                    <>
                        <BaseCheckbox
                            checked={Boolean(value)}
                            id={name}
                            inputRef={ref}
                            size={size || 's'}
                            onBlur={onBlur}
                            onChange={(e) => onChange(e.target.checked)}
                            {...props}
                        />
                        {message && (
                            <FieldHint error={hasError} size={size || 's'}>
                                {message}
                            </FieldHint>
                        )}
                    </>
                );
            }}
        />
    );
};
