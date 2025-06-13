import type { FC } from 'react';

import { useGate } from 'effector-react';

import { userGate } from 'entities/user';

export const Dialogs: FC = () => {
    useGate(userGate);
    
    return  <div></div>
}