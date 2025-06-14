import type { FC } from 'react';

import { Avatar, Stack, Typography } from 'shared/ui';

import { userSelectors } from '../model/user.store';

import styles from './Profile.module.css';

const { useUser } = userSelectors;
export const Profile: FC = () => {
    const user = useUser();

    if (!user) {
        return null;
    }

    return (
        <Stack align="center" className={styles.profile} gap="l">
            <Avatar name={user.id.toString()} size="xs" />
            <Typography>{user.phone_number}</Typography>
        </Stack>
    );
};
