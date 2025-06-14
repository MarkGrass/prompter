import { type FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import cn from 'clsx';

import { Button, Form, Input, Textarea } from 'shared/ui';

import { createDialogGot, createDialogSelectors } from '../model/create-dialog.store';
import type { CreateDialogRequest } from '../model/create-dialog.types';

import styles from './Uploader.module.css';

export type UploaderProps = {
    onCreate?: (id: string) => void;
};
const { useDialog } = createDialogSelectors;

export const Uploader: FC<UploaderProps> = ({ onCreate = () => null }) => {
    const methods = useForm({
        defaultValues: {
            phone_number: '',
            message: '',
        },
    });

    const dialog = useDialog();

    const handleSubmit = (values: CreateDialogRequest) => {
        createDialogGot(values);
    };

    useEffect(() => {
        if (dialog) {
            onCreate(dialog.id);
        }
    }, [dialog]);

    return (
        <FormProvider {...methods}>
            <Form
                className={cn({ [styles.form]: true })}
                id="send-message-form"
                onSubmit={handleSubmit}
            >
                <Input fullWidth name="phone_number" placeholder="Телефон" />

                <Textarea className={styles.control} name="message" rows={7} />
                <Button
                    className={styles.action}
                    form="send-message-form"
                    size="xs"
                    type="submit"
                >
                    Ответить
                </Button>
            </Form>
        </FormProvider>
    );
};
