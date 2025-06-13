import type { FC, ReactNode } from 'react';

import type {
    DialogProps as OzenDialogProps,
    DialogHeaderProps,
    DialogTitleProps,
    DialogSubtitleProps,
    DialogBodyProps,
    DialogFooterProps,
} from '@ozen-ui/kit/Dialog';
import {
    Dialog as OzenDialog,
    DialogHeader,
    DialogSubtitle,
    DialogTitle,
    DialogBody,
    DialogFooter,
} from '@ozen-ui/kit/Dialog';

export type DialogProps = OzenDialogProps & {
    headerProps?: DialogHeaderProps;
    title?: ReactNode;
    titleProps?: DialogTitleProps;
    subTitleProps?: DialogSubtitleProps;
    subTitle?: ReactNode;
    bodyProps?: Omit<DialogBodyProps, 'children'>;
    footer?: ReactNode;
    footerProps?: Omit<DialogFooterProps, 'children'>;
};

export const Dialog: FC<DialogProps> = ({
    children,
    title,
    subTitle,
    headerProps,
    titleProps,
    subTitleProps,
    footerProps,
    bodyProps,
    footer,
    ...rest
}) => (
    <OzenDialog {...rest}>
        {(title || subTitle) && (
            <DialogHeader {...headerProps}>
                {title && <DialogTitle {...titleProps}>{title}</DialogTitle>}
                {subTitle && (
                    <DialogSubtitle {...subTitleProps}>{subTitle}</DialogSubtitle>
                )}
            </DialogHeader>
        )}
        <DialogBody {...bodyProps}>{children}</DialogBody>
        {footer && <DialogFooter {...footerProps}>{footer}</DialogFooter>}
    </OzenDialog>
);
