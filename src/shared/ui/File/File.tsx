import type { FC } from 'react';

import type { FileProps as OzenFileProps } from '@ozen-ui/kit/File';
import { File as OzenFile } from '@ozen-ui/kit/File';

type FileProps = OzenFileProps;

export const File: FC<FileProps> = ({ children, ...rest }) => (
    <OzenFile {...rest}>{children}</OzenFile>
);
