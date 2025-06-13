import type { FC } from 'react';

import type { PopoverProps as OzenPopoverProps } from '@ozen-ui/kit/Popover';
import { Popover as OzenPopover } from '@ozen-ui/kit/Popover';

type PopoverProps = OzenPopoverProps;

export const Popover: FC<PopoverProps> = ({ children, ...rest }) => (
    <OzenPopover {...rest}>{children}</OzenPopover>
);
