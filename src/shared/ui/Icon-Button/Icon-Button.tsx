import { forwardRef } from 'react';

import type { IconButtonProps as OzenIconButtonProps } from '@ozen-ui/kit/IconButtonNext';
import { IconButton as OzenIconButton } from '@ozen-ui/kit/IconButtonNext';

export type IconButtonProps = OzenIconButtonProps;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
    return <OzenIconButton ref={ref} size="s" {...props} />;
});
