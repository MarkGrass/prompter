import { type FC } from 'react';

import type { LoaderProps as OzenLoaderProps } from '@ozen-ui/kit/Loader';
import { Loader as OzenLoader } from '@ozen-ui/kit/Loader';


export type LoaderProps = OzenLoaderProps;

export const Loader: FC<LoaderProps> = ({ ...rest }) => {
    return <OzenLoader size="l" {...rest} />;
};
