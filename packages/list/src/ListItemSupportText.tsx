import React from 'react';
import { Caption } from '@design-system/typography';
import type { CaptionProps } from '@design-system/typography';

export type ListItemSupportTextProps = CaptionProps;

export const ListItemSupportText: React.FC<ListItemSupportTextProps> = (props) => (
  <Caption as="span" color="subtle" {...props} />
);
ListItemSupportText.displayName = 'ListItemSupportText';
