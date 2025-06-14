import { type FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { FilterIcon, Form, IconButton, Input, Stack } from 'shared/ui';

import { filtersInitialState } from '../constants/filters.initial-state';
import type { FiltersFields } from '../model/filters.schema';
import { filtersResolver } from '../model/filters.schema';

import styles from './Dialogs-Filter.module.css';

export const DialogsFilter: FC = () => {
    const methods = useForm<FiltersFields>({
        defaultValues: filtersInitialState,
        resolver: filtersResolver,
    });

    const onSubmit = () => {};

    const handleClick = () => {};

    return (
        <FormProvider {...methods}>
            <Form<FiltersFields>
                className={styles.form}
                id="filters-form"
                onSubmit={onSubmit}
            >
                <Stack fullHeight fullWidth align="center" gap="s" justify="center">
                    <Input fullWidth name="search" placeholder="" />

                    <IconButton icon={<FilterIcon />} onClick={handleClick} />
                </Stack>
            </Form>
        </FormProvider>
    );
};
