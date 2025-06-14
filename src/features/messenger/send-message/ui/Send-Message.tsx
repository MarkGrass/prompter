import { type FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import cn from 'clsx';

import { Button, Form, Textarea } from 'shared/ui';

import type { MessageFields } from '../model/send-message.schema';
import { messageResolver } from '../model/send-message.schema';
import { messageSent } from '../model/send-message.store';

import styles from './Send-Message.module.css';
type SendMessageProps = {
    className?: string;
    dialog_id?: string;
    role: string;
    value: string;
};
export const SendMessage: FC<SendMessageProps> = ({
    className = '',
    value = '',
    dialog_id = '',
    role = 'operator',
}) => {
    const methods = useForm<MessageFields>({
        defaultValues: {
            dialog_id,
            role,
            message: '',
        },
        resolver: messageResolver,
    });
    const { reset, resetField, setValue } = methods;
    const handleSubmit = (values: MessageFields) => {
        resetField('message');
        reset();
        messageSent(values);
    };

    useEffect(() => {
        if (value) {
            setValue('message', value);
        }
    }, [value]);

    return (
        <FormProvider {...methods}>
            <Form<MessageFields>
                className={cn({ [styles.form]: true, [className]: Boolean(className) })}
                id="send-message-form"
                onSubmit={handleSubmit}
            >
                <Textarea className={styles.control} name="message" value={value} />
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
