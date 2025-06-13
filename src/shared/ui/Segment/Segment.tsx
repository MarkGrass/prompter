import type { FC } from 'react';

import type {
    SegmentProps as OzenSegmentProps} from '@ozen-ui/kit/Segment';
import {
    Segment as OzenSegment
} from '@ozen-ui/kit/Segment';

type SegmentProps = OzenSegmentProps;

export const Segment: FC<SegmentProps> = ({ children, ...rest }) => (
    <OzenSegment {...rest}>{children}</OzenSegment>
);
