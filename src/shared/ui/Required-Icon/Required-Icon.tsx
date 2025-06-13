import type { FC } from 'react';

import type { IconProps } from '@ozen-ui/icons';
import { TextStarIcon } from '@ozen-ui/icons';

export type RequiredIconProps = IconProps;
export const RequiredIcon: FC<RequiredIconProps> = (props) => {
    return <TextStarIcon size="s" {...props} />;
};
