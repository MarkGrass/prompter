import type { FC } from 'react';

import type { IndicatorProps as OzenIndicatorProps } from '@ozen-ui/kit/Indicator';
import { Indicator as OzenIndicator } from '@ozen-ui/kit/Indicator';

type IndicatorProps = OzenIndicatorProps;

export const Indicator: FC<IndicatorProps> = (props) => <OzenIndicator {...props} />;
