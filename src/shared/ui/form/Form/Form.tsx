import type { PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';

type FromProps<T> = {
    id: string;
    onSubmit: (data: T) => void;
    className?: string;
};

export const Form = <T extends Record<string, unknown>>({
    id = '',
    className = '',
    onSubmit = () => null,
    children,
}: PropsWithChildren<FromProps<T>>) => {
    const { handleSubmit, formState } = useFormContext<T>();
    const sendFormData = (values: T) => {
        if (formState.isSubmitting || formState.isSubmitted) {
            return;
        }

        onSubmit(values);
    };

    return (
        <form className={className} id={id} onSubmit={handleSubmit(sendFormData)}>
            {children}
        </form>
    );
};
