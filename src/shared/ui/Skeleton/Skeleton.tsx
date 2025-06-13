import type { FC } from 'react';

import type { SkeletonProps as OzenSkeletonProps } from '@ozen-ui/kit/Skeleton';
import { Skeleton as OzenSkeleton } from '@ozen-ui/kit/Skeleton';

type SkeletonProps = OzenSkeletonProps;

export const Skeleton: FC<SkeletonProps> = (props) => <OzenSkeleton {...props} />;
