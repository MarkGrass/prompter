import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import type { BaseTextareaProps } from './Textarea';
import { BaseTextarea } from './Textarea';

export type TextareaProps = BaseTextareaProps & {
    name: string;
};

export const Textarea: FC<TextareaProps> = ({ name, size, rows, hint, ...props }) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, ref }, fieldState: { error } }) => {
                const hasError = Boolean(error);
                const errorMessage = error?.message ?? '';

                return (
                    <BaseTextarea
                        error={hasError}
                        hint={hasError ? errorMessage : hint}
                        id={name}
                        rows={rows || 3}
                        size={size || 's'}
                        textareaProps={{
                            ref: ref,
                            autoComplete: 'do-not-autofill',
                        }}
                        onBlur={onBlur}
                        onChange={onChange}
                        {...props}
                    />
                );
            }}
        />
    );
};
