import type { FC } from 'react';

import type { SegmentItemProps as OzenSegmentItemProps } from '@ozen-ui/kit/Segment';
import { SegmentItem as OzenSegmentItem } from '@ozen-ui/kit/Segment';

type SegmentItemProps = OzenSegmentItemProps;

export const SegmentItem: FC<SegmentItemProps> = ({ children, ...rest }) => (
    <OzenSegmentItem {...rest}>{children}</OzenSegmentItem>
);
