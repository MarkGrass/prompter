import type { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'shared/router';
import { Button, Form, Input, Stack, useSnackbar } from 'shared/ui';

import { loginInitialState } from '../constants/login.initial-state';
import type { LoginFields } from '../model/login.schema';
import { loginResolver } from '../model/login.schema';
import {
    loginFormSubmitted,
    loginSelectors,
    useLoginErrorHandler,
    useLoginSuccessHandler,
} from '../model/login.store';

import styles from './Login-Form.module.css';

const { useLoginLoading } = loginSelectors;

export const LoginForm: FC = () => {
    const navigate = useNavigate();
    const { pushMessage } = useSnackbar();
    const isLoading = useLoginLoading();
    const methods = useForm<LoginFields>({
        defaultValues: loginInitialState,
        resolver: loginResolver,
    });
    const { reset } = methods;

    const redirectToRootPage = () => {
        navigate(ROUTES.ROOT);
    };

    const onSubmit = (values: LoginFields) => {
        loginFormSubmitted(values);
    };

    useLoginErrorHandler(() => {
        reset();

        pushMessage({
            status: 'error',
            title: 'не удалось авторизовать пользователя',
            description: 'Проверьте правильность введенных данных',
        });
    });

    useLoginSuccessHandler(redirectToRootPage);

    return (
        <FormProvider {...methods}>
            <Form<LoginFields>
                className={styles.form}
                id="login-form"
                onSubmit={onSubmit}
            >
                <Stack
                    fullHeight
                    fullWidth
                    align="center"
                    direction="column"
                    gap="xl"
                    justify="center"
                >
                    <Input
                        fullWidth
                        name="email"
                        placeholder="Укажите электронную почту"
                    />

                    <Input
                        fullWidth
                        name="password"
                        placeholder="Укажите пароль"
                        type="password"
                    />

                    <Button fullWidth form="login-form" loading={isLoading} type="submit">
                        Вход
                    </Button>
                </Stack>
            </Form>
        </FormProvider>
    );
};
