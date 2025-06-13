import type { FC } from 'react';

import type { AvatarProps as OzenAvatarProps } from '@ozen-ui/kit/Avatar';
import { Avatar as OzenAvatar } from '@ozen-ui/kit/Avatar';

type AvatarProps = OzenAvatarProps;

export const Avatar: FC<AvatarProps> = (props) => <OzenAvatar {...props} />;
