import type { FC } from 'react';

import type { TagProps as OzenTagProps } from '@ozen-ui/kit/Tag';
import { Tag as OzenTag } from '@ozen-ui/kit/Tag';

type TagProps = OzenTagProps;

export const Tag: FC<TagProps> = ({ ...rest }) => <OzenTag size="xs" {...rest} />;
