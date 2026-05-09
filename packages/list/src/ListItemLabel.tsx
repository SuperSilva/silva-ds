import React from 'react';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { Body } from '@design-system/typography';
import type { BodyProps } from '@design-system/typography';

const ListItemLabelRoot = styled(Body)`
  line-height: ${tokens.lineHeight.tight};
`;

export type ListItemLabelProps = BodyProps;

export const ListItemLabel: React.FC<ListItemLabelProps> = (props) => (
  <ListItemLabelRoot as="span" weight="medium" {...props} />
);
ListItemLabel.displayName = 'ListItemLabel';
