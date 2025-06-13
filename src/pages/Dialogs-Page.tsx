import { useGate } from 'effector-react';

import { userGate, useUserErrorHandler } from 'entities/user';
import { useSnackbar } from 'shared/ui';

const DialogsPage = () => {
    const { pushMessage } = useSnackbar();
    useGate(userGate);

    useUserErrorHandler(() => {
        pushMessage({
            status: 'error',
            title: 'Не удалось загрузить данные оператора',
        });
    });

    return <div>Dialogs</div>;
};

export default DialogsPage;
